import { dehydrate, QueryClient } from 'react-query';
import {
	GetServerSidePropsContext,
	Redirect,
	GetServerSideProps,
	GetServerSidePropsResult,
	GetStaticPropsContext
} from 'next';
import session from 'cookie-session';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import absoluteUrl from 'next-absolute-url';
import { FEATURES, userPlaceholder, paginatedResponsePlaceholder } from '@sd/superdao-shared';

import { CurrentUserQuery, UserByIdOrSlugQuery, UserDaoParticipationQuery } from 'src/gql/user.generated';
import { getUserDaoParticipation } from 'src/client/commonRequests';
import { CanCreateMoreDaoQuery } from 'src/gql/daos.generated';
import { UserAPI } from 'src/features/user';
import { daosRedirect } from 'src/utils/redirects';
import { withBackToPageAuthRedirect } from 'src/utils/redirect';
import { featureToggles } from 'src/server/featureToggles.service';

type Props = { [key: string]: any };
export type SSRContext = GetServerSidePropsContext & { currentUser?: UserByIdOrSlugQuery['userByIdOrSlug'] };
type SSRMiddleware = (ctx: SSRContext) => Promise<GetServerSidePropsResult<Props> | undefined>;

const sessionMiddleware = session({
	keys: [process.env.SESSION_KEY || '']
});

export const prefetchData = async (ctx: GetServerSidePropsContext) => {
	const userId = ctx.req.session?.userId;
	const isAuthorized = !!userId;

	const queryClient = new QueryClient();

	if (isAuthorized) {
		const headers = { cookie: ctx.req.headers.cookie || '' };

		const { currentUser } = (await UserAPI.useCurrentUserQuery.fetcher({}, headers)()) || {};

		// AppError.assert(currentUser, 'User not found', {
		// 	payload: { tags: { team: 'CORE', section: 'Auth' } }
		// });

		const { canCreateMoreDao } = (await UserAPI.useCanCreateMoreDaoQuery.fetcher({}, headers)())!;
		await getUserDaoParticipation(queryClient, ctx, { userId });

		queryClient.setQueryData<CanCreateMoreDaoQuery>(UserAPI.useCanCreateMoreDaoQuery.getKey(), {
			canCreateMoreDao
		});
		if (currentUser) {
			queryClient.setQueryData<CurrentUserQuery>(UserAPI.useCurrentUserQuery.getKey(), { currentUser });
			queryClient.setQueryData<UserByIdOrSlugQuery>(UserAPI.useUserByIdOrSlugQuery.getKey({ idOrSlug: currentUser.id }), {
			  userByIdOrSlug: currentUser
			});
		  }
	} else {
		queryClient.setQueryData<CurrentUserQuery>(UserAPI.useCurrentUserQuery.getKey(), {
			currentUser: userPlaceholder()
		});
		queryClient.setQueryData<UserByIdOrSlugQuery>(UserAPI.useUserByIdOrSlugQuery.getKey({ idOrSlug: '' }), {
			userByIdOrSlug: userPlaceholder()
		});
		queryClient.setQueryData<UserDaoParticipationQuery>(UserAPI.useUserDaoParticipationQuery.getKey({ userId }), {
			daoParticipation: paginatedResponsePlaceholder()
		});
	}

	// https://github.com/tannerlinsley/react-query/issues/1458
	const getProps = () => ({ dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) });

	return [queryClient, getProps, isAuthorized] as const;
};

type CheckAuthResult = [{ redirect: Redirect }, undefined] | [undefined, UserByIdOrSlugQuery['userByIdOrSlug']];
type RedirectOptions = { from: string | string[]; to?: string | string[] };

const getRedirectResult = ({ from, to }: RedirectOptions): CheckAuthResult => {
	const params = new URLSearchParams();
	if (typeof from === 'string') params.set('from', from);
	if (typeof to === 'string') params.set('to', to);
	const paramsStr = params.toString();

	const redirect = {
		destination: `/auth/login${paramsStr.length ? `?${paramsStr}` : ''}`,
		permanent: false
	};

	return [{ redirect }, undefined];
};

export const checkAuth = async (ctx: GetServerSidePropsContext): Promise<CheckAuthResult> => {
	const {
		resolvedUrl,
		query: { from: fromQuery, to },
		req
	} = ctx;
	const headers = { cookie: req.headers.cookie || '' };
	const { userId } = req.session ?? {};
	const from = fromQuery ?? resolvedUrl;

	if (!userId) return getRedirectResult({ from, to });

	const { userByIdOrSlug } = (await UserAPI.useUserByIdOrSlugQuery.fetcher({ idOrSlug: userId }, headers)()) || {};
	if (!userByIdOrSlug) return getRedirectResult({ from, to });

	return [undefined, userByIdOrSlug];
};

export const checkSupervisorAuth = async (ctx: GetServerSidePropsContext): Promise<CheckAuthResult> => {
	const [_, user] = await checkAuth(ctx);
	if (!user?.isSupervisor) return [daosRedirect, undefined];

	return [undefined, user];
};

const enrichContextWithUserData = async (ctx: SSRContext) => {
	const userId = ctx.req.session?.userId;
	if (!userId) return;

	const headers = { cookie: ctx.req.headers.cookie || '' };

	const { userByIdOrSlug } = (await UserAPI.useUserByIdOrSlugQuery.fetcher({ idOrSlug: userId }, headers)()) || {};
	if (!userByIdOrSlug) return;

	ctx.currentUser = userByIdOrSlug;
};

/**
 * SSR utils
 */

/**
 * Функция-обертка для прокидывания в NextPage переводов и hostname.
 *
 * Позволяет дополнительно передать функции-обработчики,
 * в которых будут подгружаться данные для react-query или другая информация.
 *
 * Каждая из функций может дополнительно вернуть redirect или notFound, которые будут обработаны в приоритете.
 *
 * @param middlewares
 * @constructor
 */
export const SSR = (...middlewares: SSRMiddleware[]): GetServerSideProps => {
	return async (ctx: SSRContext) => {
		const hostname = getHostname(ctx);
		const translations = await getTranslationProps(ctx);

		sessionMiddleware(ctx.req as any, ctx.res as any, () => void 0);

		// Adds current user to context at any page if user is authorized
		await enrichContextWithUserData(ctx);

		const features = {
			[FEATURES.CORE_GASLESS]: featureToggles.isEnabled(FEATURES.CORE_GASLESS)
		};
		const props = { hostname, features, ...translations };

		for (const middleware of middlewares) {
			const middlewareResult = await middleware(ctx);

			if (middlewareResult === undefined) continue;

			// Redirects
			if ('redirect' in middlewareResult || 'notFound' in middlewareResult) return middlewareResult;

			// Merge props
			if ('props' in middlewareResult) {
				Object.assign(props, middlewareResult.props);
			}
		}

		return { props };
	};
};

export const SSRAuthMiddleware = async (ctx: SSRContext) => {
	const [authRedirect] = await checkAuth(ctx);
	// strips the "_next/data" prefix
	if (authRedirect) return withBackToPageAuthRedirect(ctx.resolvedUrl);

	return undefined;
};

export const getTranslationProps = async (ctx: SSRContext | GetStaticPropsContext, addNamespaces?: string[]) => {
	let namespaces = ['common'];

	if (addNamespaces !== undefined) {
		namespaces = [...namespaces, ...addNamespaces];
	}

	return {
		...(await serverSideTranslations(ctx.locale || 'en', namespaces))
	};
};

export const getHostname = (ctx: GetServerSidePropsContext) => {
	const data = absoluteUrl(ctx.req);

	return data.host;
};

export * from './queryUtils';
