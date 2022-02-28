<script>
	import Torii from '~icons/noto/shinto-shrine';
	import Library from '~icons/flat-color-icons/library';
	import Hero from '~icons/twemoji/man-superhero-light-skin-tone';
	import Tex from '~icons/file-icons/latex';
	import Atom from '~icons/eos-icons/atom-electron';
	import {menuMode} from '$lib/stores';
	import {onDestroy} from 'svelte';
	let checked;

	const unsubscribe = menuMode.subscribe(value => {
		checked = value;
	});

	onDestroy(unsubscribe);
</script>
<nav class:checked>
		<input type=checkbox bind:checked={$menuMode} id='toggle'/>
		<label for='toggle'>
			<img class='button' src="/yinyang.svg" class:checked alt='yin-yang'/>
		</label>
	<div class='menu' class:checked on:click={() => menuMode.set(false)}>
			<a class='option' href='/'>
				<Torii/>
				<div class='jp'>鳥居</div>
			</a>
			<a class='option' href='/posts'>
				<Library/>
				<div class='jp'>Post</div>
			</a>
			<a class='option' href='/about'>
				<Hero/>
				<div class='jp'>俺</div>
			</a>
			<a class='option' href='/tex'>
				<Tex/>
				<div class='jp'>Tex & Asciidoc</div>
			</a>
			<a class='option' href='/about'>
				<Atom/>
				<div class='jp'>かむやしろ</div>
			</a>
			<a class='option' href='/posts'>
				<Torii/>
				<div class='jp'>かむやしろ</div>
			</a>
	</div>
</nav>


<style lang="scss">
	$transTime: 500ms;
	$height: 50%;
  nav{
    z-index: 98;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 2fr 2fr;
		justify-items: center;
		align-items: center;
		width: 100vw;
		height: $height;
		position: fixed;
		bottom: calc(-4/5) *$height;
    transform: translateY(0);
    transition: transform $transTime cubic-bezier(0.4, 0, 0.2, 1);

    &.checked {
      transform: translateY(-80%);
    }
  }
		#toggle {
			display: none;
		}
		label {
			display: flex;
			justify-content: center;
      grid-row: 1 / 2;
      grid-column: 1/ 4;
			opacity: .4;
		}
    img.button {
			width: 5vh;
      cursor: pointer;
      transform-origin: center;
			transform: rotate(0) ;
			transition: transform $transTime cubic-bezier(0.4, 0, 0.2, 1);
			&.checked {
					transform: rotate(-360deg);
        animation: spin .5s linear infinite;
        @keyframes spin {
          0% { transform: rotate(0); }
          100% { transform: rotate(-360deg); }
        }
			}
			&:hover {
			}
    }
	.menu {
		grid-row: 2 /4;
		grid-column: 1 / 4;
		display: contents;
		text-align: center;
	}

		a.option {
			height: 100%;
			width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      align-content: stretch;
      //background: linear-gradient(rgb(131 63 63), transparent);
      background: rgba(0,0,0,0.6);
      backdrop-filter: saturate(180%) blur(10px);
			&:hover {
        background: rgba(0,0,0,0.1);
			}
      border: 1px solid rgba(0, 0, 0, 0.25);
      box-sizing: border-box;
		}
		.jp {
				font-size: 2.5vh;
		}
  nav :global( .menu a.option svg){
	width: auto;
	height: 50%;
}
</style>