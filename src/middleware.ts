import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
	const auth = context.request.headers.get('authorization');

	// Credentials aus Umgebungsvariablen (process.env für SSR Runtime)
	const username = process.env.AUTH_USERNAME;
	const password = process.env.AUTH_PASSWORD;

	if (!username || !password) {
		// Wenn keine Credentials gesetzt, direkt weiterleiten
		return next();
	}

	// Basic Auth prüfen
	if (auth) {
		const [scheme, credentials] = auth.split(' ');
		if (scheme === 'Basic') {
			const decoded = atob(credentials);
			const [user, pass] = decoded.split(':');

			if (user === username && pass === password) {
				return next();
			}
		}
	}

	// Auth fehlgeschlagen oder nicht vorhanden
	return new Response('Unauthorized', {
		status: 401,
		headers: {
			'WWW-Authenticate': 'Basic realm="KnowledgeHub"',
		},
	});
});
