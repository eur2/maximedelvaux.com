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
  let visible;
  function handleToggle() {
    visible = !visible;
  }
  import Siema from "siema";
  import { onMount } from "svelte";
  onMount(() => {
    function printSlideIndex() {
      document.querySelector(".index-current").innerHTML =
        this.currentSlide + 1;
    }
    document.querySelector(".index-total").innerHTML = document.querySelector(
      ".siema"
    ).childElementCount;

    // console.log(document.querySelector('.siema').childElementCount)
    const mySiema = new Siema({
      duration: 0,
      draggable: true,
      loop: true,
      onInit: printSlideIndex,
      onChange: printSlideIndex,
    });
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    prev.addEventListener("click", () => mySiema.prev());
    next.addEventListener("click", () => mySiema.next());
  });
  export let post;
</script>
<svelte:head>
  <title>{post.title.rendered}</title>
</svelte:head>
<header class="fixed t0 l0 r0 z10">
  <div class="flex jc-sb w100 p25">
    <button on:click="{handleToggle}">
      {post.title.rendered}
    </button>
    <a href="#{post.id}">×</a>
  </div>
</header>

{#if visible}
<div class="modal">
  <div on:click="{handleToggle}">
    <p class="w100 center"><button on:click="{handleToggle}">×</button></p>
    <p>
      The concept of the interior is fundamental in architectural design. Yet
      there are very few studies that approach it as a separate field of
      inquiry. Behind the permanence of buildings’ façades, all sorts of
      transformations, adjustments and modifications are carried out. From this
      perspective, a study of our interiors provides valuable information about
      the new challenges to which architectural practice must rise.
    </p>
  </div>
</div>
{/if}

<div class="siema">
  {@html post.content.rendered}
</div>
<button class="prev fixed b0 l0"></button>
<button class="next fixed b0 r0"></button>
<div class="fixed b0 l0 p25">
  <span class="index-current"></span><span>/</span
  ><span class="index-total"></span>
</div>

<!-- {@html post.content.rendered} -->

<!-- <Carousel perPage={{ 800: 1 }} duration={0} draggable={true} dots={false}>
        <span class="control" slot="left-control"></span>
       <div class="img">1
       </div>
       <div class="img">2</div>
       <div class="img">3</div>
        <span class="control" slot="right-control"></span>
        </Carousel> -->

<!-- {#if post.acf.video}
    <Video src={post.acf.video.url}/>
    {/if}
    <div>{@html post.acf.body_text}</div> -->