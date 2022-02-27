<script>
	import Katex from './Katex.svelte';
	let input = String.raw`i \hbar \frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat H \Psi(\mathbf{r},t)`;

	let height = '2em';
	let text_area_el;
	function cal_height() {
		let computed_styles = window.getComputedStyle(text_area_el);
		let lineHeight = computed_styles.lineHeight;
		let padding = computed_styles.padding;
		height = (input.split(/\r\n|\r|\n/).length * parseInt(lineHeight, 10) + 2 * parseInt(padding, 10)).toString() + lineHeight.slice(-2);
	}

</script>

<div class="container">
<textarea bind:value={input}
					bind:this={text_area_el}
					style='height: {height}'
					on:input={cal_height}
					placeholder="Enter your latex expression" ></textarea>
	<div class='latex_rendered_box'>
		<Katex latex={input}/>
	</div>
</div>

<style lang='scss'>
	.container {
			display: flex;
			flex-direction: column;
			justify-content:  space-around;
			align-items: center;
			textarea {
				background-color: #dddddd;
				overflow: auto;
				color: #666666;
				padding: 1em;
				border-radius: 10px;
				border: 2px solid transparent;
				outline: none;
				font-family: var(--font-mono);
				font-weight: 500;
				font-size: 20px;
				line-height: 1.4;
				width: 100%;
				height: auto;
				transition: all 0.2s;
				&:hover{
					cursor: pointer;
					background-color: #eeeeee;
				}
				&:focus {
					cursor: text;
					color: #333333;
					background-color: white;
					border-color: fuchsia;
					height: 4em;

				}
			}
		.latex_rendered_box {
			padding: 1em;
      border: 2px solid grey;
			border-radius: .5em;
      width: 100%;
			background-color: white;
    }
	}
</style>
