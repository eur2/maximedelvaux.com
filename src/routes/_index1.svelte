<script context="module">
  //https://pl.maop.fr/wp-json/wp/v2/posts?custom_per_page=200
  export async function preload({ params, query }) {
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
  // import Front from "../components/Front.svelte";
  // import Post from "../components/Post.svelte";
  import Video from "../components/Video.svelte";
  import VideoImg from "../components/VideoImg90.svelte";
  import Header from "../components/Header.svelte";

  let searchTerm = "";
  $: filteredPosts = posts.filter(
    (post) => post.title.rendered.toLowerCase().indexOf(searchTerm) !== -1
  );

  let randomPost = "";
  // let r1, r2, r3, r4, r5 = "";
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  $: r1 = posts[randomIntFromInterval(1, 5)];
  $: r2 = posts[randomIntFromInterval(6, 10)];
  $: r3 = posts[randomIntFromInterval(11, 15)];
  $: r4 = posts[randomIntFromInterval(16, 20)];
  $: r5 = posts[randomIntFromInterval(21, 25)];

  import Siema from "siema";
  import { onMount } from "svelte";
  onMount(() => {
    // randomPost = posts[Math.floor(Math.random() * 20)];
    // console.log(randomPost)
    // function randomIntFromInterval(min, max) { 
    //   return Math.floor(Math.random() * (max - min + 1) + min);
    // }
    // r1 = posts[randomIntFromInterval(1, 5)];
    // r2 = posts[randomIntFromInterval(6, 10)];
    // r3 = posts[randomIntFromInterval(11, 15)];
    // r4 = posts[randomIntFromInterval(16, 20)];
    // r5 = posts[randomIntFromInterval(21, 25)];
    // console.log(r1);
    // console.log(r2);

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
            lazyImage.srcset = lazyImage.dataset.srcset;
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

    const mySiema = new Siema({
      duration: 0,
      draggable: true,
      loop: true,
    });
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    prev.addEventListener("click", () => mySiema.prev());
    next.addEventListener("click", () => mySiema.next());
  });
</script>
<svelte:head>
  <title>Maxime Delvaux</title>
</svelte:head>

<Header />

<!-- <div>{r3.title.rendered}</div>
<div>{r4.title.rendered}</div>
<div>{r5.title.rendered}</div> -->
<nav class="fixed t0 l0 p25">
  <!-- <a rel="prefetch" href=".">Front</a> -->
  <form role="search">
    <input type="text" name="search" aria-label=" Search" placeholder="Search" bind:value="{searchTerm}" />
  </form>
</nav>
<div class="siema">
  <VideoImg src="{r1}" />
  <VideoImg src="{r2}" />
  <VideoImg src="{r3}" />
  <VideoImg src="{r4}" />
  <VideoImg src="{r5}" />

  <!-- <div>
    {r1.title.rendered}
    {#if r1.acf.video === false}
    <img src="{r1.acf.image.sizes.large}"/>
  {:else}
  <Video src="{r1.acf.video.url}"/>
        {/if}
        </div> -->


</div>
<button class="prev h90 absolute b0 l0"></button>
<button class="next h90 absolute b0 r0"></button>


<main class="flex wrap p125" id="main">
  {#if filteredPosts && filteredPosts.length > 0} {#each filteredPosts as post}
  <article id="{post.id}" class="flex wrap w25 p125">
    <a rel="prefetch" href="{post.slug}">
      <div>
        {#if post.acf.image}
        <img class="lazy" src="" data-src="{post.acf.image.sizes.thumbnail}" srcset="" data-srcset="{post.acf.image.sizes.thumbnail}" alt="md" />
        {/if} {#if post.acf.video}
        <video autoplay>
          <source loading="lazy" src="{post.acf.video.url}" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        {/if}
        <header>
          <h4>{post.title.rendered}</h4>
        </header>
      </div>
    </a>
  </article>
  <!-- <article>
    <Carousel perPage={{ 800: 1 }} duration={0} draggable={true} dots={false}>
      <span class="control" slot="left-control"></span>
      {@html post.content.rendered}
      <span class="control" slot="right-control"></span>
      </Carousel>
  </article> -->
  {/each} {/if}
</main>