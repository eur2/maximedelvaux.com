<script>
  export let src;
</script>

<div class="bg-white z2">
  <header class="absolute p25 z10">
    <a rell="pprefetch" href="{src.slug}">
      {src.title.rendered}
    </a>
  </header>

  {#if src.acf.video === false}
  <figure>
    <img
      class="lazy"
      src=""
      data-src="{src.acf.image.sizes.large}"
      srcset=""
      data-srcset="{src.acf.image.sizes.large}"
      alt=""
    />
  </figure>
  {:else}

  <figure>
    <video autoplay loop>
      <source loading="lazy" src="{src.acf.video.url}}" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  </figure>
  {/if}
</div>
