import { redirect } from '@sveltejs/kit';
import pb from '$lib/pocketbase';

export const load = async ({ url }) => {
	if (!pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	try {
		// Example: Fetch a list of records from a collection
		const records = await pb.collection('your_collection_name').getList(1, 10);
		return {
			records: records.items
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			records: []
		};
	}
};