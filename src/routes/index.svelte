<script context="module">
	export const prerender = true;
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/posts.json');
		const posts = await res.json();

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
	import Slide from '../lib/Slide.svelte';
	import Siema from 'siema';
	import { onMount } from 'svelte';

	let r1 = posts[Math.floor(Math.random() * (8 - 4 + 1) + 4)];
	let r2 = posts[Math.floor(Math.random() * (13 - 9 + 1) + 9)];
	let r3 = posts[Math.floor(Math.random() * (18 - 14 + 1) + 14)];
	let r4 = posts[Math.floor(Math.random() * (23 - 19 + 1) + 19)];
	let r5 = posts[Math.floor(Math.random() * (28 - 24 + 1) + 24)];
	let r6 = posts[Math.floor(Math.random() * (33 - 29 + 1) + 29)];
	let r7 = posts[Math.floor(Math.random() * (38 - 34 + 1) + 34)];
	let r8 = posts[Math.floor(Math.random() * (43 - 39 + 1) + 39)];

	let searchTerm = '';
	$: filteredPosts = posts.filter(
		(post) => post.title.rendered.toLowerCase().indexOf(searchTerm) !== -1
	);

	onMount(() => {
		const mySiema = new Siema({
			duration: 0,
			draggable: true,
			loop: true
		});
		const prev = document.querySelector('.prev');
		const next = document.querySelector('.next');
		prev.addEventListener('click', () => mySiema.prev());
		next.addEventListener('click', () => mySiema.next());

		var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
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

		var lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'));
		if (typeof IntersectionObserver !== 'undefined') {
			let lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach(function (video) {
					if (video.isIntersecting) {
						for (var source in video.target.children) {
							var videoSource = video.target.children[source];
							if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
								videoSource.src = videoSource.dataset.src;
							}
						}

						video.target.load();
						video.target.classList.remove('lazy');
						lazyVideoObserver.unobserve(video.target);
					}
				});
			});

			lazyVideos.forEach(function (lazyVideo) {
				lazyVideoObserver.observe(lazyVideo);
			});
		}
	});
</script>

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
<div>
	<div class="siema">
		<Slide src={r1} />
		<Slide src={r2} />
		<Slide src={r3} />
		<Slide src={r4} />
		<Slide src={r5} />
		<Slide src={r6} />
		<Slide src={r7} />
		<Slide src={r8} />
	</div>
	<button class="prev w33 h90 absolute b0 l0" />
	<button class="next w33 h90 absolute b0 r0" />
</div>
<main class="flex wrap p125" id="main">
	{#if filteredPosts && filteredPosts.length > 0}
		<!-- {#each filteredPosts as post} -->
		{#each filteredPosts || [] as post (post.id)}
			<article id={post.id} class="f25 p125">
				<a sveltekit:prefetch href={post.slug}>
					<div>
						{#if post.acf.image}
							<img
								class="lazy"
								src=""
								data-src={post.acf.image.sizes.medium}
								srcset=""
								data-srcset="{post.acf.image.sizes.thumbnail} 400w, {post.acf.image.sizes
									.medium} 800w"
								alt="Maxime Delvaux {post.title.rendered}"
								width="800"
								height="640"
							/>
						{/if}
						{#if post.acf.video}
							<video class="lazy" autoplay loop playsinline>
								<source data-src={post.acf.video.url} type="video/mp4" />
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
