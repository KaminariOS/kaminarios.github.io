<script context="module">
	// Get posts info
	// const allPosts = import.meta.globEager(`../../../lib/posts/*.md`);
	// let posts = [];
	// // Get the posts' slugs
	// for (let relPath in allPosts) {
	// 	const post = allPosts[relPath];
	// 	const slug = relPath.split('/').slice(-1)[0].split('.')[0];
	// 	const p = {post, slug };
	// 	posts.push(p);
	// }
	// export async function load({ url, fetch}) {
	// 	// const { slug } = params;
	// 	const url_to = url.pathname + '.json';
	// 	console.log(url_to);
	// 	const res = await fetch(url_to);
	// 	if (!res.ok){
	// 		return {
	// 			status: res.status,
	// 			error: new Error(`Could not load ${url_to}`)
	// 		};
	// 	}
	// // 	// Find the post with the slug
	// // 	// const filteredPost = posts.find((p) => {
	// // 	// 	return p.slug.toLowerCase() === slug.toLowerCase();
	// // 	// });
	// 	return {
	// 		props: {
	// 			// Tell page to load that post's module
	// 			// component: filteredPost.post.default,
	// 			post: await res.json(),
	// 		}
	// 	};
	// }
</script>
<script>
	import Tag from '$lib/Tag.svelte';
	import {onMount} from 'svelte';
	import findPre from '$lib/copy';
	export let post;

	onMount(findPre);
</script>
<svelte:head>
	<title>
		{post.title}
	</title>
</svelte:head>

<div class='post-meta'>
	<h1>{post.title}</h1>

	<div class='meta'>
		<div class='notes'>
			<div class="note">
				First &nbsp;created on 🗓️{post.birthtime}
			</div>
			<div class="note">
				Last updated on 🗓️{post.mtime}
			</div>
			<div class="note">{post.readingTime}</div>
		</div>
		<div class="tags">
			{#each post.tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>
	</div>

</div>
<hr>
<div class='post-content'>
	<slot/>
</div>
<style lang='scss'>
  .tags {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .note {
    font-size: .6em;
    color: var(--secondary-light-color);
  }
  .notes {
    display: flex;
    flex-direction: column;
  }
  .meta {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>