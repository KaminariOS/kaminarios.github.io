<script>
	import Katex from './Katex.svelte';
	import readme from './README.adoc?raw';

	let input = readme;

	let height = '50em';
	let text_area_el;
	function cal_height() {
		let computed_styles = window.getComputedStyle(text_area_el);
		let lineHeight = computed_styles.lineHeight;
		let padding = computed_styles.padding;
		height = (40 + input.split(/\r\n|\r|\n/).length * parseInt(lineHeight, 10) + 2 * parseInt(padding, 10)).toString() + lineHeight.slice(-2);
	}

</script>



<!--					style='height: {height}'-->
<div class="container">
<textarea bind:value={input}
					bind:this={text_area_el}
					on:input={cal_height}
					placeholder="Enter your latex expression" ></textarea>
	<div class='latex_rendered_box'>
<!--		<Katex latex={input}/>-->
<!--		{@html html}-->
		<Katex doc={input}/>
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
