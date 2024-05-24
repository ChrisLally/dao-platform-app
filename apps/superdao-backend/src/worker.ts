import { NestFactory } from '@nestjs/core';
//import { LoggerService as Logger } from '@nestjs/common';
//import { WINSTON_MODULE_PROVIDER } from '@dev/nestjs-common';
import { Logger } from '@nestjs/common';

import { TasksModule } from 'src/entities/cron/tasks.module';

(async () => {
	const app = await NestFactory.createApplicationContext(TasksModule, { bufferLogs: true });
	app.enableShutdownHooks(['SIGINT', 'SIGTERM']);
	const logger = new Logger('worker');
	app.useLogger(logger);

	logger.log('Cron worker is ready');
})();
