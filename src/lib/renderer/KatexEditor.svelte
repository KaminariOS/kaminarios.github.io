<script>
	import Katex from './Katex.svelte';
	import {preprocess, process} from './KatexProcessor.js';
	import readme from './README.adoc?raw';

	let input = String.raw`

`;
	input = readme;
	let html;
	let md = {convert: (e, c) => e};

	function load() {
		md = new window.Asciidoctor;
	}
	$: {
		html = preprocess(input);
		html = md.convert(html, { safe: 'safe', header_footer: true });
		html = process(html);
	}

	let height = '50em';
	let text_area_el;
	function cal_height() {
		let computed_styles = window.getComputedStyle(text_area_el);
		let lineHeight = computed_styles.lineHeight;
		let padding = computed_styles.padding;
		height = (40 + input.split(/\r\n|\r|\n/).length * parseInt(lineHeight, 10) + 2 * parseInt(padding, 10)).toString() + lineHeight.slice(-2);
	}

</script>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.6/asciidoctor.min.js" on:load={load()}></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
</svelte:head>

<!--					style='height: {height}'-->
<div class="container">
<textarea bind:value={input}
					bind:this={text_area_el}
					on:input={cal_height}
					placeholder="Enter your latex expression" ></textarea>
	<div class='latex_rendered_box'>
<!--		<Katex latex={input}/>-->
		{@html html}
	</div>
</div>

<style lang='scss'>
	@import '../scss/mixins';

	.container {
			display: flex;
			gap: 1em;
			flex-direction: row;
		  align-items: stretch;
			min-height: 90vh;
    	color: var(--text-color);
    @include for-phone-only {
			flex-direction: column;
    }
			justify-content: stretch;
			//align-items: center;
			textarea {
        color: var(--text-color);
        background-color: var(--post-page-background-color);
				resize: none;
				overflow: auto;
				padding: 1em;
				border-radius: 10px;
				border: 2px solid grey;
				outline: none;
				font-family: var(--font-mono);
				font-weight: 500;
				font-size: 20px;
				line-height: 1.4;
				width: 100%;
				min-height: 50vh;
				transition: all 0.2s;
				&:hover{
					cursor: pointer;
				}
				&:focus {
					cursor: text;
					border-color: fuchsia;
				}
			}
		.latex_rendered_box {
			background-color: var(--post-page-background-color);
			padding: 1em;
      border: 2px solid grey;
			border-radius: .5em;
      width: 100%;
			height: 100%
    }
	}
</style>
