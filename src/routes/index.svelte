<script context="module">
  //https://pl.maop.fr/wp-json/wp/v2/posts?custom_per_page=200
  export function preload({ params, query }) {
    return this.fetch(
      `https://api.maximedelvaux.com/wp-json/wp/v2/posts?_embed&per_page=100`
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
  import Slide from "../components/Slide.svelte";
	//const index = Math.floor(array.length * Math.random());

  // let randomPost = "";
  // let r1, r2, r3, r4, r5 = "";
  // function randomIntFromInterval(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  // $: r1 = posts[randomIntFromInterval(1, 5)];
  // $: r2 = posts[randomIntFromInterval(6, 10)];
  // $: r3 = posts[randomIntFromInterval(11, 15)];
  // $: r4 = posts[randomIntFromInterval(16, 20)];
  // $: r5 = posts[randomIntFromInterval(21, 25)];

  // r1 = posts[randomIntFromInterval(1, 5)];
  // r2 = posts[randomIntFromInterval(6, 10)];
  // r3 = posts[randomIntFromInterval(11, 15)];
  // r4 = posts[randomIntFromInterval(16, 20)];
  // r5 = posts[randomIntFromInterval(21, 25)];
  // let r1 = posts[Math.floor(Math.random() * (5 - 1 + 1) + 1)];
  let r1 = posts[Math.floor(Math.random() * (10 - 6 + 1) + 6)];
  let r2 = posts[Math.floor(Math.random() * (15 - 11 + 1) + 11)];
  let r3 = posts[Math.floor(Math.random() * (20 - 16 + 1) + 16)];
  let r4 = posts[Math.floor(Math.random() * (25 - 21 + 1) + 21)];

  // let r3 = posts[Math.floor(Math.random() * (15 - 11 + 1) + 11)];
  // let r4 = posts[Math.floor(Math.random() * (20 - 16 + 1) + 16)];
  // let r5 = posts[Math.floor(Math.random() * (25 - 21 + 1) + 21)];
  // r3 = posts[4];
  // r4 = posts[5];
  // r5 = posts[6];
  import Siema from "siema";
  import lozad from 'lozad';

  let searchTerm = "";
  $: filteredPosts = posts.filter(
    (post) => post.title.rendered.toLowerCase().indexOf(searchTerm) !== -1
  );

  import { onMount } from "svelte";

  onMount(() => {
   
    const observer = lozad('.lazy', {
});
observer.observe();

  //   function randomIntFromInterval(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  //   r1 = posts[randomIntFromInterval(1, 5)];
  //   r2 = posts[randomIntFromInterval(6, 10)];
  //   r3 = posts[randomIntFromInterval(11, 15)];
  //   r4 = posts[randomIntFromInterval(16, 20)];
  //   r5 = posts[randomIntFromInterval(21, 25)];

    const mySiema = new Siema({
      duration: 0,
      draggable: true,
      loop: true,
    });
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    prev.addEventListener("click", () => mySiema.prev());
    next.addEventListener("click", () => mySiema.next());
    

    // var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
    // if (typeof IntersectionObserver !== "undefined") {
    //   let lazyImageObserver = new IntersectionObserver(function (
    //     entries,
    //     observer
    //   ) {
    //     entries.forEach(function (entry) {
    //       if (entry.isIntersecting) {
    //         let lazyImage = entry.target;
    //         lazyImage.src = lazyImage.dataset.src;
    //         lazyImage.srcset = lazyImage.dataset.srcset;
    //         lazyImage.classList.remove("lazy");
    //         lazyImage.classList.add("loaded");
    //         lazyImageObserver.unobserve(lazyImage);
    //       }
    //     });
    //   });
    //   lazyImages.forEach(function (lazyImage) {
    //     lazyImageObserver.observe(lazyImage);
    //   });
    // }


  });
</script>

<aside class="fixed b0 r0 p25">
  <form role="search">
    <input type="text" name="search" aria-label="Search" placeholder="Search" bind:value="{searchTerm}" />
  </form>
</aside>
<div class="siema">
  <Slide src="{r1}" />
  <Slide src="{r2}" />
  <Slide src="{r3}" />
  <Slide src="{r4}" />
</div>
<button class="prev h90 absolute b0 l0"></button>
<button class="next h90 absolute b0 r0"></button>
<main class="flex wrap p125" id="main">
  {#if filteredPosts && filteredPosts.length > 0} 
  <!-- {#each filteredPosts as post} -->
  {#each filteredPosts || [] as post (post.id)}
  <article id="{post.id}" class="w25 p125">
    <a href="{post.slug}">
      <div>
        {#if post.acf.image}
        <img class="lazy" src="" data-src="{post.acf.image.sizes.medium}" srcset="" data-srcset="{post.acf.image.sizes.medium}" alt="md" />
        <!-- <img class="lazy" src="" data-src="{post.acf.image.sizes.thumbnail}" srcset="" data-srcset="{post.acf.image.sizes.thumbnail}" alt="md" /> -->
        <!-- <img class="lazy" src="{post.acf.image.sizes.thumbnail}" srcset="{post.acf.image.sizes.thumbnail}" alt="md" /> -->
        {/if} {#if post.acf.video}
        <video class="lazy" autoplay loop playsinline>
          <source data-src="{post.acf.video.url}" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        {/if}
        <header>
          <h4>{post.title.rendered}</h4>
        </header>
      </div>
    </a>
  </article>
  {/each} {/if}
</main>