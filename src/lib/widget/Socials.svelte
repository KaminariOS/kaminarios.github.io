<script>
	import Github from '~icons/logos/github-octocat';
	import Gmail from '~icons/logos/google-gmail';
	import meta from '$lib/meta';
</script>

<div class="socials">
	<a href="{meta.github}" target="_blank">
		<Github/>
	</a>
	<a href="{meta.mail}" target="_blank">
		<Gmail/>
	</a>
</div>

<style lang='scss'>
  .socials {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      width: 24px;
      color: var(--text-color);
      fill: var(--text-color);

      &:hover {
        color: var(--link-highlight-color);
        fill: var(--link-highlight-color);
      }
    }
  }
</style>