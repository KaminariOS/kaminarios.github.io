<script>
	import Socials from '$lib/widget/Socials.svelte';
	import IconSvelte from '~icons/logos/svelte-icon';
</script>

<footer class="content">
		<div class='credits'>
			Powered by
			<a href="https://kit.svelte.dev/" target="_blank" rel="noopener">
				<IconSvelte/>
			SvelteKit.
		</a>.
		</div>
		<div class='socials'>
			<Socials/>
		</div>
</footer>
<style lang="scss">
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        //padding: 40px;
			  position: relative;
				margin-top: 5%;
				margin-bottom: 5%;
			  //mix-blend-mode: difference;
      a {
        font-weight: bold;
      }

    }

</style>