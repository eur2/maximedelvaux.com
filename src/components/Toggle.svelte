<script>
  export let visible;
  export let title;
  function handleToggle() {
    visible = !visible;
  }
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .toggle {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px;
  }

  .toggle:hover {
    cursor: pointer;
  }

  .fixed {
    position: fixed;
    z-index: 100;
    top: 0;
    background-color: white;
  }

  .close {
    position: fixed;
    z-index: 1000;
    top: 0.25em;
    right: 0.25em;
  }

  .hidden {
    display: none;
  }
</style>

<div class="containr {visible ? 'visble fied' : ''}">
  <button
    class="toggle {visible ? 'hidden' : 'visible'}"
    on:click="{handleToggle}"
  >
    {title}
  </button>
  {#if visible}
  <button class="p close mixblend" on:click="{handleToggle}">×</button>
  <div class="container fixed" on:click="{handleToggle}">
    <slot></slot>
  </div>
  {/if}
</div>
