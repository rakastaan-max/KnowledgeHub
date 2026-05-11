import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
	const password = (process.env.AUTH_PASSWORD ?? import.meta.env.AUTH_PASSWORD)?.trim();

	// Kein Passwort gesetzt → kein Schutz
	if (!password) return next();

	const url = new URL(context.request.url);

	// Login-Seite und Auth-API immer erlauben
	if (url.pathname === '/login' || url.pathname.startsWith('/api/auth')) {
		return next();
	}

	// Cookie direkt aus Request-Header lesen
	const cookieHeader = context.request.headers.get('cookie') ?? '';
	const cookieValue = cookieHeader
		.split(';')
		.find(c => c.trim().startsWith('kh_auth='))
		?.split('=')[1]
		?.trim();

	if (cookieValue === password) {
		return next();
	}

	return context.redirect('/login');
});
