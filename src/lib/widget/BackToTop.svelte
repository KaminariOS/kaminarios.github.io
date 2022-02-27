<script>
	export let showOnPx = 150;
	let hidden = true;
	let autoHide;
	function goTop() {
		document.body.scrollIntoView({
			behavior: "smooth",
		});
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}
		hidden = scrollContainer().scrollTop <= showOnPx;
		if (!hidden){
			if (autoHide){
				clearTimeout(autoHide);
			}
			autoHide = setTimeout(() => hidden = true, 800);
		}
	}
</script>

<style lang='scss'>
    .back-to-top {
      position: fixed;
      right: 5%;
      bottom: 5%;
      border-radius: 100%;
      background: rgba(133, 245, 39, 0.1);
      padding: 0.5rem;
      border: none;
      cursor: pointer;
      opacity: 100%;
      transition: opacity 0.8s;
      outline-offset: 4px;
			z-index: 100;
    }
    .hidden {
      opacity: 0;
    }

    .back-to-top-icon {
      width: 2rem;
      height: 2rem;
      color: #7ac9f9;
    }

</style>

<svelte:window on:scroll={handleOnScroll} />

<button class="back-to-top" class:hidden on:click={goTop}>
	<img class="back-to-top-icon" alt='Top button' src='/rocket.svg'/>
<!--	<svg-->
<!--		xmlns="http://www.w3.org/2000/svg"-->
<!--		class="back-to-top-icon"-->
<!--		fill="none"-->
<!--		viewBox="0 0 24 24"-->
<!--		stroke="currentColor"-->
<!--	>-->
<!--		<path-->
<!--			stroke-linecap="round"-->
<!--			stroke-linejoin="round"-->
<!--			stroke-width="2"-->
<!--			d="M7 11l5-5m0 0l5 5m-5-5v12"-->
<!--		/>-->
<!--	</svg>-->
</button>