
import supabase from '$lib/db';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const data = await supabase.auth.user();
	return {
		email: data?.email
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await supabase.auth.user();
		if (data?.email) {
			await supabase.auth.signOut();
		} 
	}
};