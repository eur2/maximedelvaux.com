<script context="module">
  //https://pl.maop.fr/wp-json/wp/v2/posts?custom_per_page=200
  export function preload({ params, query }) {
    return this.fetch(`https://eurogroupe.org/dev/wp/wp-json/wp/v2/posts`)
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
  import Carousel from "@beyonk/svelte-carousel";

  // let searchTerm = "";
  // $: filteredPosts = posts.filter(
  //   (post) => post.title.rendered.toLowerCase().indexOf(searchTerm) !== -1
  // );
  // import { onMount } from "svelte";
  // onMount(() => {})
</script>
<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
<nav class="sticky t0 p251251 bg-white flex jc-sb">
  <!-- <form role="search">
    <input
      type="text"
      name="search"
      aria-label="Search"
      placeholder="Recherche"
      bind:value="{searchTerm}"
    />
  </form> -->
  <a href="info">Information</a>
</nav>
<main>
  {#if posts && posts.length > 0}
  {#each posts as post}
  <article>
    <a rel="prefetch" href="{post.slug}">
      <div>
    <h2>{post.title.rendered}</h2>
    {#if post.acf.image}
      <img src="{post.acf.image.sizes.large}" alt="md" />
    {/if}
    {#if post.acf.video}
    <Video src={post.acf.video.url}/>
    {/if}
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
  {/each}
  {/if}

</main>
