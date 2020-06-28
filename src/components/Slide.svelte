<script>
  export let src;
</script>

<div class="bg-white z2">
  <header class="absolute z10">
    <h2>
      <a class="block p25" href="{src.slug}">
        {src.title.rendered}
      </a>
    </h2>
  </header>

  {#if src.acf.image === false}
  <figure>
    <video autoplay loop playsinline>
      <source loading="lazy" src="{src.acf.video1080p.url}" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  </figure>
  {:else}
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
  {/if}
</div>
