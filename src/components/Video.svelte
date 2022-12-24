<script>
  export let src;
</script>

<!-- <video autoplay>
  <source src="{src}" type="video/mp4" />
  Sorry, your browser doesn't support embedded videos.
</video> -->
<figure>
  <video autoplay loop>
    <source loading="lazy" src="{src}" type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>
</figure>