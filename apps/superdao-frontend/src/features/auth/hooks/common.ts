

export const handleAuthError = (error: any, errorMessage: string | null, defaultError: string) => {
	const message = errorMessage ?? defaultError;
	console.error('Auth error', error);
	console.error('Auth error message', message);
};
