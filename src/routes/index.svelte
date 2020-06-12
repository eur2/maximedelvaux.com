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
  let searchTerm = "";
  $: filteredPosts = posts.filter(
    (post) => post.title.rendered.toLowerCase().indexOf(searchTerm) !== -1
  );
  // import { onMount } from "svelte";
  // onMount(() => {})
</script>
<style>
  .thumb{
    display: flex;
    height: 100vh;
  }
</style>
<!-- <svelte:head>
	<title>Sapper project template</title>
</svelte:head> -->
<header class="fixed t0 l0 r0 p25 flex jc-sb">
  <h1><a href=".">Maxime Delvaux</a></h1>
</header>
<nav class="fixed t0 l0 r0 p25 flex jc-sb">
  <form role="search">
    <input
      type="text"
      name="search"
      aria-label="Search"
      placeholder="Search"
      bind:value="{searchTerm}"
    />
  </form>
</nav>
<main>
  {#if filteredPosts && filteredPosts.length > 0}
  {#each filteredPosts as post}
  <article>
    <header class="sticky t0 p25">
      <h2>{post.title.rendered}</h2>
    </header>
    <a rel=prefetch href="{post.slug}">
      <div class="thumb">
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
