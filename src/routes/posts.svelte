<script context="module">
	export async function load({ fetch }) {
		const url = '/blog.json';
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import Card from '$lib/BlogCard.svelte';
	export let posts;
</script>
<svelte:head>
	<title>進撃のRustacean</title>
</svelte:head>
<!--<section id="blog">-->
<!--	<Section align="top" title="All posts">-->
<!--		<div class="container">-->
<!--			<BlogGrid>-->
<!--				{#each posts as post}-->
<!--					<BlogPostCard {post} />-->
<!--				{/each}-->
<!--			</BlogGrid>-->
<!--		</div>-->
<!--	</Section>-->
<!--</section>-->
<div class="grid-container">
	{#each posts as post, i}
		<Card {post} {i}/>
	{/each}
</div>
<style lang='scss'>

  @media only screen and (min-width: 501px){
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-flow: dense;
      grid-auto-rows: min(30vh, 30vw);
      grid-gap: 10px;
      box-sizing: border-box
    }
    :global(.grid-container :nth-child(5n + 1), .grid-container :nth-child(5n)){
      grid-area: span 1 / span 2;
    }
    :global(.grid-container :nth-child(5n + 2), .grid-container :nth-child(5n + 3)){
      grid-area: span 2 / span 1;
    }

	}

  @media only screen
  and (max-width: 420px)
  //and (device-height: 844px)
   {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: dense;
      grid-auto-rows: auto;
      gap: 10px;
    }
    :global(.grid-container :nth-child(4n + 1), .grid-container :nth-child(4n + 3), .grid-container :nth-child(4)){
      grid-area: span 1 / span 1;
    }
	}



</style>