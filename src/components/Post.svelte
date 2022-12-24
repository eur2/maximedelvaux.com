<script>
  export let title, num, date, pdf, cover;
  let visible, hovering;
  function handleToggle() {
    visible = !visible;
  }
  function enter() {
    hovering = true;
  }
  function leave() {
    hovering = false;
  }
</script>

<article>
  <header
    on:click="{handleToggle}"
    on:mouseenter="{enter}"
    on:mouseleave="{leave}"
  >
    <h2 class="flex1">PL {num}</h2>
    <h2 class="flex2">{#if title === ''}*****{:else}{title}{/if}</h2>
    <h2 class="flex2">{date}</h2>
    <h2 class="flex0">
      <a rel="noopener" target="_blank" href="{pdf}">PDF</a>
    </h2>
  </header>
  {#if hovering}
  <div class="w50 absolute z10 flex jc-center ai-center">
    <img src="{cover}" width="300" alt="PL{num}" />
  </div>
  {/if} {#if visible}
  <slot></slot>
  {/if}
</article>
