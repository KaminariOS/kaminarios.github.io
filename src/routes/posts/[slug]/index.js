import posts from '$lib/posts.js';

// Provide props for index.svelte
export async function get({ params }) {
	const post = posts.find(x => x.slug === params.slug);
	if (post) {
		return {
			status: 200,
			body: {post},
		};
	}

	return {
		status: 404,
	};
}