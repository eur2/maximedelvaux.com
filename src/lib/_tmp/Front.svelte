<script>
  let visible = true;
  function handleToggle() {
    visible = !visible;
  }
</script>

<aside class="pointer" on:click="{handleToggle}">
  {#if visible}
  <div class="fixed z100 t0 l0 r0 b0 flex jc-center ai-center">
    <slot></slot>
  </div>
  {/if}
</aside>
