<script context="module">
	import BackToTop from '$lib/widget/BackToTop.svelte';
	import '$lib/styles/global_md.scss';
	import Particles from '$lib/particles/Particles.svelte';
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import ToggleButton from '$lib/widget/EffectToggler.svelte';
	import ThemeToggler from '$lib/widget/ThemeToggler.svelte';
	import {enable_effects, menuMode} from '$lib/stores.js';
	import PostContent from '$lib/PostContent.svelte';
	import {onDestroy} from 'svelte';

	export async function load({ url, fetch }) {
	        const post = await fetch(`${url.pathname}.json`).then(res => res.json());
					return {
						props: {
							post
						}
					}
	}
</script>
<script>
	import meta from '$lib/meta.js';
	import { Utterances } from '@codewithshin/svelte-utterances';
	export let post;
	let commentNode;
	onDestroy(() => {
		while (commentNode && commentNode.firstChild) {
			commentNode.removeChild(commentNode.firstChild);
		}
	})
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<ThemeToggler/>
<div id='party'>
	<Particles/>
</div>
<Nav/>
<main class='post-page'>
<PostContent {post}>
	<slot/>
</PostContent>
</main>
<div bind:this={commentNode}>
	<Utterances
							reponame="{meta.repo}"
							theme="gruvbox-dark"
							label="comments"
							issueTerm="pathname"
	/>
</div>

<Footer/>
<BackToTop/>
<ToggleButton bind:checked={$enable_effects}/>

<style lang='scss'>
	.post-page {
		background-color: var(--post-page-background-color);
	}
	#party {
		z-index: 300;
	}

</style>


