import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, ServerOptions, Namespace } from 'socket.io';
import { createAdapter, RedisAdapter } from '@socket.io/redis-adapter';
import Redis from 'ioredis';
import { INestApplicationContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

type CustomAdapterConstructor = (nsp: Namespace) => RedisAdapter;

export class RedisIoAdapter extends IoAdapter {
	private adapterConstructor: CustomAdapterConstructor;

	constructor(private app: INestApplicationContext) {
		super(app);
	}

	async connectToRedis(): Promise<void> {
		const configService = this.app.get(ConfigService);

		const host = configService.get<string>('redis.host')!;
		const port = configService.get<number>('redis.port')!;
		const username = configService.get<string>('redis.user');
		const password = configService.get<string>('redis.password');

		const pubClient = new Redis(port, host, {
			username,
			password
		});
		const subClient = pubClient.duplicate();

		this.adapterConstructor = createAdapter(pubClient, subClient) as CustomAdapterConstructor;
	}

	createIOServer(port: number, options?: ServerOptions): Server {
		const server: Server = super.createIOServer(port, options);
		server.adapter(this.adapterConstructor as any); // Type assertion if necessary
		return server;
	}

	public static formatUserIdRoom(userId: string) {
		return `user-${userId}`;
	}
}
