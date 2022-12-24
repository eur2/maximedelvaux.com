<script>
    import { onMount } from "svelte";

    export let id, slug, title;

    let a;
    let offsetToTop;
    let offsetToBottom;
    function handleScroll() {
        offsetToTop = a.getBoundingClientRect().top;
        offsetToBottom = a.getBoundingClientRect().bottom;
        // console.log('offsetToTop', offsetToTop);
    }
</script>
<style>
    article {
        margin-bottom: 25%;
    }
</style>
<svelte:window on:scroll="{handleScroll}" />

<article id={id} bind:this="{a}">
    <header class="none fixed t0 l0 z2 p25" class:block={offsetToTop < 20} class:non={offsetToBottom < 20}>
        <a href={slug}>{title}</a>
    </header>
    <slot />
</article>