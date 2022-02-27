<script>
	import { fade, fly } from 'svelte/transition';
	import {enable_effects} from '$lib/stores.js';
	let num = 1;
	setInterval(() => num = $enable_effects? (num % 5 + 1): num, 1000);
	let eyes = [1, 2, 3, 4, 5];
	$: src = `/eyes/eye${num}.svg`;

	function handleMouse(e){
		num = num % 5 + 1;
	}
</script>

<div on:mouseenter={handleMouse} on:mouseleave={handleMouse}>
	{#each eyes.filter(t => t === num) as id (id)}
		<img src={`/eyes/eye${id}.svg`} alt="Welcome" in:fly out:fade/>
	{/each}
</div>
<style lang='scss'>
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>