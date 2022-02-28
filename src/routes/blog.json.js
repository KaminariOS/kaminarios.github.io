import { postInfo as posts} from '$lib/posts';

export async function get() {
	const body = posts;

	return {
		status: 200,
		body: body,
	};
}