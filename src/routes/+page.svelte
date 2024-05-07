<script>
  let { data } = $props();
  let { posts, about, randomPosts } = data;
  import lazy from "$lib/lazy";
  import Splash from "$lib/Splash.svelte";
  let visible = $state();
  function handleToggle() {
    visible = !visible;
  }

  let searchTerm = $state("");
  const filteredPosts = $derived(
    posts.filter(
      (post) => post.title.rendered.toLowerCase().indexOf(searchTerm) !== -1,
    ),
  );
</script>

<header class="fixed t0 r0 z10 max">
  <h1>
    <button onclick={handleToggle}> Maxime Delvaux </button>
  </h1>
  {#if visible}
    <div class="modal p25">
      <div class="fixed t0 r0">
        <button onclick={handleToggle}>×</button>
      </div>
      {@html about[0].content.rendered}
    </div>
  {/if}
</header>
<aside class="fixed b0 r0 p25">
  <form role="search">
    <input
      type="text"
      name="search"
      aria-label="Search"
      placeholder="Search"
      bind:value={searchTerm}
    />
  </form>
</aside>
<Splash {randomPosts} />

<main class="flex wrap p125" id="main">
  {#if filteredPosts && filteredPosts.length > 0}
    {#each filteredPosts || [] as post (post.id)}
      <article id={post.id} class="f25 p125">
        <a data-sveltekit-preload-data="hover" href={post.slug}>
          <div>
            {#if post.acf.image}
              <img
                use:lazy
                class="lazy"
                src=""
                data-src={post.acf.image.sizes.medium}
                srcset=""
                data-srcset="{post.acf.image.sizes.thumbnail} 400w, {post.acf
                  .image.sizes.medium} 800w"
                alt="Maxime Delvaux {post.title.rendered}"
                width={post.acf.image.sizes["medium-width"]}
                height={post.acf.image.sizes["medium-height"]}
              />
            {/if}
            {#if post.acf.video}
              <video
                use:lazy
                class="lazy"
                data-src={post.acf.video.url}
                type="video/mp4"
                preload="auto"
                muted
                autoplay
                loop
                playsinline
              >
                <track default kind="captions" />
              </video>
            {/if}
            <header>
              <h2>{post.title.rendered}</h2>
            </header>
          </div>
        </a>
      </article>
    {/each}
  {/if}
</main>
