<script>
	export let data;
	const { post } = data;
	let visible;
	function handleToggle() {
		visible = !visible;
	}
	import Siema from 'siema';
	import { onMount } from 'svelte';

	let lazyContent = post.content.rendered
		.replace(/src/gi, 'data-src')
		.replace(/wp-image-/gi, 'lazy img-');

	onMount(() => {
		function printSlideIndex() {
			document.querySelector('.index-current').innerHTML = this.currentSlide + 1;
		}
		document.querySelector('.index-total').innerHTML =
			document.querySelector('.siema').childElementCount;

		// console.log(document.querySelector('.siema').childElementCount)
		const mySiema = new Siema({
			duration: 0,
			draggable: true,
			loop: true,
			onInit: printSlideIndex,
			onChange: printSlideIndex
		});
		const prev = document.querySelector('.prev');
		const next = document.querySelector('.next');

		prev.addEventListener('click', () => mySiema.prev());
		next.addEventListener('click', () => mySiema.next());

		var lazyImages = [].slice.call(document.querySelectorAll('img'));
		if (typeof IntersectionObserver !== 'undefined') {
			let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						let lazyImage = entry.target;
						lazyImage.src = lazyImage.dataset.src;
						lazyImage.srcset = lazyImage.dataset.srcset;
						lazyImage.classList.remove('lazy');
						lazyImage.classList.add('loaded');
						lazyImageObserver.unobserve(lazyImage);
					}
				});
			});
			lazyImages.forEach(function (lazyImage) {
				lazyImageObserver.observe(lazyImage);
			});
		}

		var lazyVideos = [].slice.call(document.querySelectorAll('video'));
		if (typeof IntersectionObserver !== 'undefined') {
			let lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						let lazyVideo = entry.target;
						lazyVideo.src = lazyVideo.dataset.src;
						lazyVideo.classList.remove('lazy');
						lazyVideo.classList.add('loaded');
						lazyVideoObserver.unobserve(lazyVideo);
					}
				});
			});
			lazyVideos.forEach(function (lazyVideo) {
				lazyVideoObserver.observe(lazyVideo);
			});
		}
	});
</script>

<svelte:head>
	<title>{post.title.rendered} - Maxime Delvaux</title>
	<meta name="og:title" content="{post.title.rendered} - Maxime Delvaux" />
	<meta name="twitter:title" content="{post.title.rendered} - Maxime Delvaux" />
</svelte:head>
<header class="fixed t0 l0 r0 z10">
	<div class="flex jc-sb w100">
		<h1 class="p25">
			<!-- <button on:click="{handleToggle}"> -->
			{post.title.rendered}
			<!-- </button> -->
		</h1>
		<a data-sveltekit-preload-data="hover" class="block p25" href="./#{post.id}">×</a>
	</div>
</header>

{#if visible}
	<div class="modal p25">
		<div on:click={handleToggle} on:keydown={handleToggle}>
			<p class="w100 center">
				<button on:click={handleToggle} on:keydown={handleToggle}>×</button>
			</p>
			{@html post.acf.text}
		</div>
	</div>
{/if}
<main>
	<div class="siema">
		{@html lazyContent}
	</div>
	<button class="prev fixed b0 l0" />
	<button class="next fixed b0 r0" />
	<div class="fixed b0 l0 p25">
		<span class="index-current" /><span>/</span><span class="index-total" />
	</div>
</main>
