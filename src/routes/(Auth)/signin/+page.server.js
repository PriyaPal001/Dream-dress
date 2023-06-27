import supabase from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const { email, password } = Object.fromEntries(await request.formData());
		console.log(email, password);
		const { user, error } = await supabase.auth.signIn({
			email: String(email),
			password: String(password)
		});
		console.log(user);

	
		throw redirect(302, '/');
		
	}
};