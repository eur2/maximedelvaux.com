<script>
  export let src;
</script>

<div class="bg-white z2">
  <header class="absolute p25 z10">
    <a rel="prefetch" href="{src.slug}">

      {src.title.rendered}
    </a>

  </header>

  {#if src.acf.video === false}
  <figure class="h90">
    <img src="{src.acf.image.sizes.large}" alt="" />
  </figure>
  {:else}

<figure class="h90">
  <video autoplay loop>
    <source loading="lazy" src="{src.acf.video.url}}" type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>
</figure>
{/if}
</div>