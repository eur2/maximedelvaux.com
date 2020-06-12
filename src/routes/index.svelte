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
  let visible;
  function handleToggle() {
    visible = !visible;
  }
  let index;
  function handleIndex() {
    index = !index;
  }
</script>
<style>
  .thumb{
    display: flex;
    height: 100vh;
  }
  .modal {
    /* position: ;
    top: 0;
    left: 0;
    right: 0; */
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
  .modal a{
    color: white;
  }
  .white{
    color: white;
  }
  .index{
    width:25%;
    display: flex;
    align-items: center;
    margin: .5em;
  }
</style>
<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
<header class="fixed l0 t0 r0 p25 flex flexend z10">
  <h1><a class={visible ? 'white' : ''} href=".">Maxime Delvaux</a>, <a class={visible ? 'white' : ''} href="#" on:click="{handleToggle}">Info {visible ? '×' : ''}</a></h1>
</header>
{#if visible}
<div class="modal">
  <!-- <div class="flex jc-center"><button on:click="{handleToggle}">×</button></div> -->
  <p class="flex jc-center"><a href="mailto:maxdelv@gmail.com">Mail</a>, <a href="tel:0032472427942">Mobile</a></p>

<p> Maxime Delvaux (1984, Belgium) lives and works in Brussels. Belgian photographer specialised in architecture, he graduates from INRACI in Brussels in 2008. He also worked on the creation of pictures with the curators of the Belgian Pavilion at the Venice Biennale of Architecture 2014. In addition, he is the author of the video clips and pictures of the exhibition/catalogue of WBA in Paris: “entrer:” and his work is presented in the exhibition Landskating organised by the Villa Noailles in Hyères in 2016.</p>

</div>
{/if}


<nav class="fixed b0 l0 r0 p25 flex jc-center">
  <button on:click="{handleIndex}">Index {index ? '×' : ''}</button>
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
<main class={index ? 'flex wrap' : ''}>
  {#if filteredPosts && filteredPosts.length > 0}
  {#each filteredPosts as post}
  <article id={post.id} class={index ? 'index' : ''}>
    <header class="t0 p25 {index ? 'none' : 'sticky'}">
      <h2>{post.title.rendered}</h2>
    </header>
    <a rel=prefetch href="{post.slug}">
      <div class={index ? '' : 'thumb'}>
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
