<script>
	import katex from 'katex';
	import Katex from './Katex.svelte';
	import {preprocess, process} from './KatexProcessor.js';
	import {browser} from '$app/env';
	import {onMount} from 'svelte';

	export let doc = '';
	let html;
	let md = {convert: (e, c) => e, unload: true};

	function load() {
		if (window.Asciidoctor && !!md.unload){
			md = new window.Asciidoctor;
		}
	}
	$: {
		html = preprocess(doc);
		html = md.convert(html, { safe: 'safe', header_footer: true });
		html = process(html);
	}
	const options = {
		// displayMode: false,
		// output: 'mathml',
		throwOnError: false
	}
	// const callback = function(){
	// 	if (browser){
	// 		setInterval(load, 1000);
	// 	}
	// }
	onMount(load);
</script>
<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.6/asciidoctor.min.js" on:load={load}></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
</svelte:head>

<div class='latex_rendered'>
	{@html html}
</div>

<style>

</style>

<!--<style>-->
<!--    .katex-version {display: none;}-->
<!--    .katex-version::after {content:"0.10.2 or earlier";}-->
<!--</style>-->
<!--<span class="katex">-->
<!--  <span class="katex-mathml">The KaTeX stylesheet is not loaded!</span>-->
<!--  <span class="katex-version rule">KaTeX stylesheet version: </span>-->
<!--</span>-->