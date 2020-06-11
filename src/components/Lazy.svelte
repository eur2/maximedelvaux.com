<script>
  import { onMount } from "svelte";
  onMount(() => {
    var lazyImages = [].slice.call(document.querySelectorAll(".lozad"));
    if (typeof IntersectionObserver !== "undefined") {
      let lazyImageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lozad");
            lazyImage.classList.add("loaded");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  });
</script>
<style>
  :global(body) {
    font-family: "u001", "foliobt", "Helvetica Neue", Arial, sans-serif;
    font-size: 32px;
    line-height: 1;
    /* letter-spacing: -0.02em; */
    word-spacing: -0.05em;
    color: black;
    background-color: white;
  }

  /* :global(h1) {
      text-transform: lowercase;
    } */

  .figure {
    height: 100vh;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: auto;
    height: 100%;
    object-fit: contain !important;
    /* transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1); */
  }

  .slide.plan {
    background-color: white;
  }

  img.plan {
    object-fit: contain !important;
    padding: 12.5%;
  }

  .slide-txt {
    max-width: 75%;
    margin: auto;
  }

  :global(.carousel) {
    height: 100vh;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: wrap;
    flex-direction: column;
  }

  :global(.slide) {
    height: 100%;
    width: auto;
  }

  :global(figure) {
    position: relative;
    overflow: hidden;
    height: 100vh;
  }

  :global(.mw) {
    max-width: 800px;
    margin: auto;
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
      object-fit: cover !important;
    }

    :global(.slide) {
      width: 100%;
    }

    :global(body) {
      font-size: 24px;
    }
  }

  @media (max-width: 420px) {
    .slide-txt {
      max-width: 100%;
    }

    img.plan {
      object-fit: cover !important;
      padding: 0;
    }
  }

  @media (min-width: 1600px) {
    .slide-txt {
      max-width: 50%;
    }
  }
</style>
{#each posts as post}
<Article slug="{post.slug.current}">
  <div class="carousel">
    {#each post.imageArray as img}
    <div class="slide {img.categorySet}">
      <figure>
        <img class="lozad {img.categorySet}" srcset=""
        data-srcset={`${urlFor(img) .width(400) .quality(70)} 400w,
        ${urlFor(img) .width(800) .quality(70)} 800w, ${urlFor(img) .width(1600)
        .quality(70)} 1600w`} src="" data-src={urlFor(img) .height()
        .width(1600) .quality(70) .auto('format') .url()} alt={post.title}/>
        <!-- <figcaption class="none">{item.caption}</figcaption> -->
      </figure>
    </div>
    {/each}
    <div class="slide" id="{post.slug.current}">
      <div class="figure ai-center">
        <div class="slide-txt mw p">
          <div class="row"><p>{post.description}</p></div>

          {#if post.location}
          <div class="row">
            <div class="label">Location</div>
            <div class="data">{post.location}</div>
          </div>
          {/if} {#if post.program}
          <div class="row">
            <div class="label">Program</div>
            <div class="data">{post.program}</div>
          </div>
          {/if} {#if post.client}
          <div class="row">
            <div class="label">Client</div>
            <div class="data">{post.client}</div>
          </div>
          {/if} {#if post.status}
          <div class="row">
            <div class="label">Status</div>
            <div class="data">{post.status}</div>
          </div>
          {/if} {#if post.area}
          <div class="row">
            <div class="label">Area</div>
            <div class="data">{post.area} m<sup>2</sup></div>
          </div>
          {/if} {#if post.cost}
          <div class="row">
            <div class="label">Budget</div>
            <div class="data">{post.cost} EUR</div>
          </div>
          {/if} {#if post.team}
          <div class="row">
            <div class="label">Team</div>
            <div class="data">{post.team}</div>
          </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</Article>
{/each}
