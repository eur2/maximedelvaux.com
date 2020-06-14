<script context="module">
  //https://pl.maop.fr/wp-json/wp/v2/posts?custom_per_page=200
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
  .blue{
  
  }
  .modal a{
    color: white;
  }
  .white{
    color: white;
  }
  article.index{
    flex:25%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  header.index{
    padding: 0;

  }
  header.index h2{
    font-size: .5em;
  }
  button, form{
    padding-left: 0.25em;
  padding-right: 0.25em;
  }
  input[type=text] {
    color: black;
  }
  @media only screen and (max-width: 600px) {
    article.index{
    flex:50%;
  }}

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
  <header class="t0 p25 {index ? 'none' : 'sticky'}">
    <h2><a rel=prefetch href="{post.slug}">{post.title.rendered}</a></h2>
  </header>
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
