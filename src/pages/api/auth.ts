export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const data = await request.formData();
	const password = data.get('password');

	const correctPassword = (process.env.AUTH_PASSWORD ?? import.meta.env.AUTH_PASSWORD)?.trim();

	const isProduction = import.meta.env.PROD;

	if (!correctPassword || password === correctPassword) {
		cookies.set('kh_auth', correctPassword ?? 'open', {
			httpOnly: true,
			secure: isProduction,
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 7, // 1 Woche
			path: '/',
		});
		return redirect('/');
	}

	return redirect('/login?error=1');
};
