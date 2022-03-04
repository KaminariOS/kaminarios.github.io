<script>
    export let src;
    export let alt;
    export let caption = true;
</script>

<figure>
    <img {src} {alt}/>
    {#if caption}
        <figcaption>
            {alt}
        </figcaption>
    {/if}
</figure>

<style lang="scss">
  figure {
    display: flex;
    flex-flow: column;
  }
  img {
    max-width: 100%;
    max-height: 50vh;
    margin: auto;
    border-radius: 10px;
    display: block;
  }
  figcaption {
    font: italic smaller "Open Sans", "DejaVu Sans", sans-serif;
    padding: 3px;
    text-align: center;
  }

</style>
