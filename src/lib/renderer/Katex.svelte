<script>
	import katex from 'katex';
	export let latex = '';
	const options = {
		// displayMode: false,
		// output: 'mathml',
		throwOnError: false
	}
	$: html = katex.renderToString(latex, options);
</script>
<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>

<div class='latex_rendered'>
	{@html html}
</div>



<!--<style>-->
<!--    .katex-version {display: none;}-->
<!--    .katex-version::after {content:"0.10.2 or earlier";}-->
<!--</style>-->
<!--<span class="katex">-->
<!--  <span class="katex-mathml">The KaTeX stylesheet is not loaded!</span>-->
<!--  <span class="katex-version rule">KaTeX stylesheet version: </span>-->
<!--</span>-->