import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
	const username = process.env.AUTH_USERNAME?.trim();
	const password = process.env.AUTH_PASSWORD?.trim();

	if (!username || !password) {
		return next();
	}

	const auth = context.request.headers.get('authorization');

	if (auth?.startsWith('Basic ')) {
		try {
			const base64 = auth.slice(6);
			// atob is available in Edge runtime; Buffer is not
			const decoded = atob(base64);
			const colonIndex = decoded.indexOf(':');
			const user = decoded.slice(0, colonIndex);
			const pass = decoded.slice(colonIndex + 1);

			if (user === username && pass === password) {
				return next();
			}
		} catch {
			// invalid base64, fall through to 401
		}
	}

	return new Response('Unauthorized', {
		status: 401,
		headers: {
			'WWW-Authenticate': 'Basic realm="KnowledgeHub"',
		},
	});
});
