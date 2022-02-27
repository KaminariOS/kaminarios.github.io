import posts from '$lib/posts.js';

export async function get() {
	const body = posts.slice(0, 4);
	return {
		status: 200,
		body: JSON.stringify(body)
	};
}