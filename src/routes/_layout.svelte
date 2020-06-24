<!-- <script context="module">
  export function preload({ params, query }) {
    return this.fetch(`https://pl.maop.fr/wp-json/wp/v2/pages`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script> -->

<script>
  // import Header from "../components/Header.svelte";
  // import Subscribe from "../components/Subscribe.svelte";
  // export let posts;
</script>

<!-- <Header>
  {#each posts as post} {#if post.slug === 'header'} {@html
  post.content.rendered} {/if} {/each}
</Header> -->
<slot></slot>
<!-- <Subscribe>
  {#each posts as post} {#if post.slug === 'subscribe'} {@html
  post.content.rendered} {/if} {/each}
</Subscribe> -->
