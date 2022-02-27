<script>
	import Particles from "svelte-particles";
	// import particlesConfig from './particles.json';
	import {options as particlesConfig} from "./firework.js";
	import {enable_effects} from '$lib/stores.js';

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let onParticlesInit = (main) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
	};
</script>

{#if $enable_effects}
	<Particles
		id="tsparticles"
		options="{particlesConfig}"
		on:particlesLoaded="{onParticlesLoaded}"
		on:particlesInit="{onParticlesInit}"
	/>
{/if}