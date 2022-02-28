import posts from '$lib/posts';

export async function get() {
	const body = posts.slice(0, 4);
	return {
		status: 200,
		body: body,
	};
}