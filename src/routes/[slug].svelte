<script context="module">
  export async function preload(page) {
    const { slug } = page.params;
    const req = await this.fetch(
      "https://eurogroupe.org/dev/wp/wp-json/wp/v2/posts?slug=" + slug
    ).then((r) => r.json());
    return { post: req[0] };
  }
</script>
<script>
      // import Video from "../components/Video.svelte";
      import Carousel from '@beyonk/svelte-carousel'
  export let post;
</script>
<style>
    header{
        display: flex;
        justify-content: space-between;
    }
</style>
<svelte:head>
	<title>{post.title.rendered}</title>
</svelte:head>
<header>
  <h1>{post.title.rendered}</h1>
  <h1><a href='.'>×</a></h1>
</header>

    <Carousel perPage={{ 800: 1 }} duration={0} draggable={true} dots={false}>
        <span class="control" slot="left-control"></span>
        {#if post.content.rendered}
        {@html post.content.rendered}
        {/if}

        <span class="control" slot="right-control"></span>
        </Carousel>

    <!-- {#if post.acf.video}
    <Video src={post.acf.video.url}/>
    {/if}
    <div>{@html post.acf.body_text}</div> -->

