<script context="module">
	// export const prerender = true;
	export async function load({ fetch }) {
		const url = '/posts/posts.json?limit=4';
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import Eyes from '$lib/widget/Eyes.svelte';
	import Typewriter from 'svelte-typewriter';
</script>


<svelte:head>
	<title>進撃のRustacean</title>
</svelte:head>
<section>
	<div class="welcome">
	<Eyes/>
</div>
	<Typewriter interval={100} cascade delay={600}>
		<h1>Big Brother</h1>
		<h1>is watching you!</h1>
	</Typewriter>
</section>



<style lang='scss'>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	section  {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
	h1 {
			color: red;
	}
</style>
