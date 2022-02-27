<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Tag from '$lib/Tag.svelte';
	let init = false;

	onMount(() => {
		init = true;
	});
	export let post;
	// export let i;
	// $: odd = ((i % 2) * 2 - 1);
	function getRandomSign(){ return Math.random() > .5? 1: -1;}
	function getRandomOffsets(){ return (Math.random() + 1) * getRandomSign();}
</script>
<!--<a href='/posts/'>-->
{#if init}
	<a transition:fly={{delay: 200, duration: 400, x: getRandomOffsets() * 600, y: getRandomOffsets() * 400}}
		 href='/posts/{post.slug}' class="blog-card spring-fever"
		 style="background-image: url({post.cover})">
		<div class="title-content">
			<h3>{post.title}</h3>
			<hr />
			<div class="intro">{post.excerpt}</div>
		</div><!-- /.title-content -->
		<div class="card-info">
		{#each post.tags as tag}
			<Tag>{tag}</Tag>
			{/each}
		</div><!-- /.card-info -->
		<div class="utility-info">
			<ul class="utility-list">
				<!--			<li class="comments">12</li>-->
				<li class="date">🗓️{post.mtime}</li>
				<li class='tag'>{post.readingTime}</li>
			</ul>
		</div><!-- /.utility-info -->
		<!-- overlays -->
<!--		<div class="gradient-overlay"></div>-->
<!--		<div class="color-overlay"></div>-->
	</a><!-- /.blog-card -->
	{/if}

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic);

  // variables
  $h-color:     #9CC9E3;
  $yellow:      #D0BB57;
  $txt-color:   #DCE3E7;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  .blog-card{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		max-width: 100%;


    //position: relative;
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
    text-align: center;
		transform: scale(1);
		transition: transform .3s cubic-bezier(.33,.66,.66,1);
		background: {
			repeat: no-repeat;
			position: center;
			size: cover;
    }



    //.color-overlay{
    //  /* Rectangle 11: */
    //  background: rgba(84,104,110,0.4);
		//
		//	position: relative;
    //  z-index: 10;
    //  top: 0;
    //  left: 0;
    //  transition: background .3s cubic-bezier(.33,.66,.66,1);
    //}
    //.gradient-overlay{
    //  /* bg-gradient: */
    //  background-image: -webkit-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
    //  background-image: -moz-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
    //  background-image: -o-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
    //  background-image: linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
		//
		//	position: relative;
    //  top: 350px;
    //  left: 0;
    //  z-index: 15;
    //}

    &:hover {
			transform: scale(1.02);
      .card-info{
        opacity: 1;
        bottom: 120px;
      }
      //.color-overlay{
      //  background: rgba(84,104,110,0.8);
      //}
    }
  }

  .title-content{
    text-align: center;
    margin: 30px 0 0 0;
    //position: absolute;
    z-index: 20;
    //width: 100%;
    top: 0;
    left: 0;
    mix-blend-mode: difference;

  }
  h3{
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    color: $h-color;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0;
  }
  hr{
    width: 30%;
    height: 1px;
    margin: 5px auto;
    border: 0;
    background: rgba(255,255,255,0.4);
  }
  .intro{
    margin: 0 auto;
    color: $txt-color;
    font-family: 'Droid Serif', serif;
    font-size: 13px;
    font-style: italic;
    line-height: 18px;
    mix-blend-mode: difference;
  }
  .card-info{
    width: 100%;
    //position: absolute;
    bottom: 100px;
    left: 0;
    margin: 0 auto;
    color: $txt-color;
    font-family: 'Droid Serif', serif;
    font-size: 16px;
    line-height: 24px;
    z-index: 20;
    opacity: 0;
    mix-blend-mode: difference;
    transition: bottom .3s, opacity .3s cubic-bezier(.33,.66,.66,1);
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
  }

  .utility-info{
    //position: absolute;
    bottom: 0;
    left: 0;
    z-index: 20;
    mix-blend-mode: difference;
  }
  .utility-list{
    list-style-type: none;
    padding: 0;
    width: 100%;
    mix-blend-mode: difference;

    li {
      margin: 0 15px 0 0;
      display: inline-block;
      color: $txt-color;
      font-family: 'Roboto', sans-serif;
    }
  }
</style>