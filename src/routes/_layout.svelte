<script context="module">
  export async function preload() {
    const req = await this.fetch(
      "https://api.maximedelvaux.com/wp-json/wp/v2/pages?slug=about"
    ).then((r) => r.json());
    return { page: req[0] };
  }
</script>

<script>
  export let page;
  export let segment;
  let visible;
  function handleToggle() {
    visible = !visible;
  }
</script>

<!-- <header class="fixed t0 r0 z10 max {segment === undefined ? 'block' : 'none'}">
  <h1>
    <button on:click="{handleToggle}">
      Maxime Delvaux
    </button>
  </h1>
  {#if visible}
  <div class="modal p25">
    <div class="fixed t0 r0">
      <button on:click="{handleToggle}">×</button>
    </div>
    {@html page.content.rendered}
  </div>
  {/if}
</header> -->
{#if segment === undefined}
<header class="fixed t0 r0 z10 max">
  <h1>
    <button on:click="{handleToggle}">
      Maxime Delvaux
    </button>
  </h1>
  {#if visible}
  <div class="modal p25">
    <div class="fixed t0 r0">
      <button on:click="{handleToggle}">×</button>
    </div>
    {@html page.content.rendered}
  </div>
  {/if}
</header>
{/if}
<slot></slot>
