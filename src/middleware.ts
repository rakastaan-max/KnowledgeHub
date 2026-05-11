import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
	const password = process.env.AUTH_PASSWORD?.trim();

	// Kein Passwort gesetzt → kein Schutz
	if (!password) return next();

	const url = new URL(context.request.url);

	// Login-Seite und Auth-API immer erlauben
	if (url.pathname === '/login' || url.pathname.startsWith('/api/auth')) {
		return next();
	}

	// Cookie prüfen
	const cookie = context.cookies.get('kh_auth');
	if (cookie?.value === password) {
		return next();
	}

	return context.redirect('/login');
});
