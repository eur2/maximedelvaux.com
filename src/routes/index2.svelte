<script context="module">
  export function preload({ params, query }) {
    return this.fetch(
      `https://eurogroupe.org/dev/wp/wp-json/wp/v2/posts?_embed&per_page=100`
    )
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import Header from "../components/Header.svelte";
  import Article from "../components/Article.svelte";
  // import Front from "../components/Front.svelte";
  // import Post from "../components/Post.svelte";
  // import Video from "../components/Video.svelte";
  let searchTerm = "";
  $: filteredPosts = posts.filter(
    (post) => post.title.rendered.toLowerCase().indexOf(searchTerm) !== -1
  );
  import { onMount } from "svelte";
  onMount(() => {
    var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
    if (typeof IntersectionObserver !== "undefined") {
      let lazyImageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            // lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
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

<svelte:head>
  <title>Maxime Delvaux</title>
</svelte:head>
<Header/>
<nav class="fixed b0 l0 r0 p25 flex jc-center z10">
  <a rel="prefetch" href="/archive">Archive</a>
  <form role="search">
    <input
      type="text"
      name="search"
      aria-label=" Search"
      placeholder="Search"
      bind:value="{searchTerm}"
    />
  </form>
</nav>
<main>
  {#if filteredPosts && filteredPosts.length > 0} {#each filteredPosts as post}
  <Article id="{post.id}" slug="{post.slug}" title="{post.title.rendered}">
    <a rel="prefetch" href="{post.slug}">
      <div class="flex h100vh">
        {#if post.acf.image}
        <img class="lazy" data-src="{post.acf.image.sizes.large}" alt="md" />
        {/if} {#if post.acf.video}
        <video autoplay>
          <source src="{post.acf.video.url}" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        {/if}
      </div>
    </a>
  </Article>
  <!-- <article>
    <Carousel perPage={{ 800: 1 }} duration={0} draggable={true} dots={false}>
      <span class="control" slot="left-control"></span>
      {@html post.content.rendered}
      <span class="control" slot="right-control"></span>
      </Carousel>
  </article> -->
  {/each} {/if}
</main>
