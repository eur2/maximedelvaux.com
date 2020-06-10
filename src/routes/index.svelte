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
  // onMount(() => {
</script>
<nav class="sticky t0 p251251 bg-white flex jc-sb">
  <form role="search">
    <input
      type="text"
      name="search"
      aria-label="Search"
      placeholder="Recherche"
      bind:value="{searchTerm}"
    />
  </form>
  <a href="https://www.instagram.com/plan_libre/" rel="noopener" target="_blank"
    >Instagram</a
  >
</nav>
<main>
  {#each filteredPosts as post}
  <article>
    <a rel="prefetch" href="{post.slug}">
    <h2>{post.title.rendered}</h2>
    <!-- <div>{@html post.content.rendered}</div> -->
    {#if post.acf.image}
    <div>
      <img src="{post.acf.image.sizes.large}" alt="md" />
    </div>
    {/if}
    {#if post.acf.video}
    <Video src={post.acf.video.url}/>
    {/if}
  </a>
  </article>
  {/each}
</main>
