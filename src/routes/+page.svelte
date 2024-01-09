<script>
	export let data;
	const { posts } = data;
	import viewport from '$lib/useViewportAction';
	import lazy from '$lib/lazy';
	import Slide from '$lib/Slide.svelte';
	import SlideLazy from '$lib/SlideLazy.svelte';
	import Siema from 'siema';
	import { onMount } from 'svelte';
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
	});
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
		<SlideLazy src={r2} />
		<SlideLazy src={r3} />
		<SlideLazy src={r4} />
		<SlideLazy src={r5} />
		<SlideLazy src={r6} />
		<SlideLazy src={r7} />
		<SlideLazy src={r8} />
	</div>
	<button aria-label="previous" class="prev w33 h90 absolute b0 l0" />
	<button aria-label="next" class="next w33 h90 absolute b0 r0" />
</div>
<main class="flex wrap p125" id="main">
	{#if filteredPosts && filteredPosts.length > 0}
		<!-- {#each filteredPosts as post} -->
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
								data-srcset="{post.acf.image.sizes.thumbnail} 400w, {post.acf.image.sizes
									.medium} 800w"
								alt="Maxime Delvaux {post.title.rendered}"
								width={post.acf.image.sizes['medium-width']}
								height={post.acf.image.sizes['medium-height']}
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
