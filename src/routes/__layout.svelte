<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import '../app.scss';
	import Particles from '$lib/particles/Particles.svelte';
	import {enable_effects, menuMode} from '$lib/stores';
	import {onMount} from 'svelte';
	import Toggle from '$lib/widget/EffectToggler.svelte';
	import BackToTop from '$lib/widget/BackToTop.svelte';
	import Nav from '$lib/Nav.svelte';
	import ThemeToggler from '$lib/widget/ThemeToggler.svelte';

	onMount(() => {
		if (!$enable_effects){
			return;
		}
		setTimeout(() => enable_effects.set(false), 15000);
	})
</script>


<Particles/>
<ThemeToggler/>
<div class="container" class:menu={$menuMode}>
<!--	<Header/>-->
	<main>
		<slot />
	</main>
</div>
<Toggle bind:checked={$enable_effects}/>
<Footer />
<BackToTop/>
<Nav/>
<style lang="scss">
	$transTime: 500ms;
	main {
		//flex: 1;
		//display: flex;
		//flex-direction: column;
		padding: 1rem;
		////max-width: 1024px;
		margin-bottom:  10%;


		box-sizing: border-box;
	}
	.container {
		/*margin: auto 10%;*/
  	perspective: 40em;
    transform-origin: bottom;

	}
	.container :global(*){
    transition: transform $transTime cubic-bezier(0.4, 0, 0.2, 1);
	}
  .container.menu :global(*) {
    //transform-origin: 100% 0;
    //transform-style: preserve-3d;
    transform:  rotateX(30deg);

  }

</style>
