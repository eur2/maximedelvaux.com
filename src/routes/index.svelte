<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`https://eurogroupe.org/dev/wp/wp-json/wp/v2/posts?_embed&per_page=100`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import Article from "../components/Article.svelte";

  // import Front from "../components/Front.svelte";
  // import Post from "../components/Post.svelte";
  import Video from "../components/Video.svelte";
  let searchTerm = "";
  $: filteredPosts = posts.filter(
    (post) => post.title.rendered.toLowerCase().indexOf(searchTerm) !== -1
  );
  let visible;
  function handleToggle() {
    visible = !visible;
  }
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
<style>
  .thumb {
    display: flex;
    height: 100vh;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    z-index: 10;
    background-color: black;
    color: white;
    cursor: pointer;
    padding: .5em;
  }

  .modal a {
    color: white;
  }

  .white {
    color: white;
  }
</style>
<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<header class="fixed l0 t0 r0 p25 flex flexend z10">
  <h1><button on:click="{handleToggle}">Maxime Delvaux</button></h1>
  {#if visible}
<div class="modal p25">
  <div class="w100 flex jc-sb">
    <p><span>Mail: </span><a href="mailto:maxdelv@gmail.com">maxdelv@gmail.com</a>
      <span> / Tel: </span><a href="tel:0032472427942">+32 472 42 79 42</a></p>
    <button on:click="{handleToggle}">×</button>
    </div>

<p >Maxime Delvaux (1984, Belgium) lives and works in Brussels. Belgian photographer specialised in architecture, he graduates from INRACI in Brussels in 2008. He also worked on the creation of pictures with the curators of the Belgian Pavilion at the Venice Biennale of Architecture 2014. In addition, he is the author of the video clips and pictures of the exhibition/catalogue of WBA in Paris: “entrer:” and his work is presented in the exhibition Landskating organised by the Villa Noailles in Hyères in 2016.</p>

</div>
{/if}
</header>


<nav class="fixed b0 l0 r0 p25 flex jc-center z10">
  <a rel=prefetch href="/archive">Archive</a>
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
  {#if filteredPosts && filteredPosts.length > 0}
  {#each filteredPosts as post}
  <Article id={post.id} slug={post.slug} title={post.title.rendered}>

    <a rel=prefetch href="{post.slug}">
      <div class="thumb">
    {#if post.acf.image}
      <img class="lazy" data-src="{post.acf.image.sizes.large}" alt="md" />
    {/if}
    {#if post.acf.video}
    <Video src={post.acf.video.url}/>
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
  {/each}
  {/if}

</main>