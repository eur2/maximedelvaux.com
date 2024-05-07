<script>
  let { randomPosts } = $props();
  import SlideLazy from "$lib/SlideLazy.svelte";
  import Siema from "siema";
  let random = $derived(Math.floor(Math.random() * 8));
  $effect(() => {
    const mySiema = new Siema({
      duration: 0,
      draggable: true,
      loop: true,
      startIndex: random,
    });
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    prev.addEventListener("click", () => mySiema.prev());
    next.addEventListener("click", () => mySiema.next());
  });
</script>

<div>
  <div class="siema">
    {#each randomPosts as post}
      <SlideLazy src={post} />
    {/each}
  </div>
  <button aria-label="previous" class="prev w33 h90 absolute b0 l0"></button>
  <button aria-label="next" class="next w33 h90 absolute b0 r0"></button>
</div>
