import posts from '$lib/posts.js';

export async function get() {
	const body = posts;

	return {
		status: 200,
		body: body,
	};
}