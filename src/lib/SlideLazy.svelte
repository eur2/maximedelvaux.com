<script>
	export let src;
	import viewport from '$lib/useViewportAction';
	import lazy from '$lib/lazy';
</script>

<div class="bg-white z2">
	<header class="z10 front-header">
		<h1>
			<a class="block p25" href={src.slug}>
				{src.title.rendered}
			</a>
		</h1>
	</header>

	{#if src.acf.image === false}
		<figure class="front-fig">
			<video
				use:lazy
				class="lazy"
				data-src={src.acf.video1080p.url}
				type="video/mp4"
				preload="auto"
				muted
				autoplay
				loop
				playsinline
			>
				<track default kind="captions" />
			</video>
		</figure>
	{:else}
		<figure class="front-fig">
			<img
				use:lazy
				class="lazy"
				src=""
				data-src={src.acf.image.sizes.large}
				srcset=""
				data-srcset="{src.acf.image.sizes.thumbnail} 400w, {src.acf.image.sizes.medium} 800w, {src
					.acf.image.sizes.large} 1600w"
				alt="Maxime Delvaux {src.title.rendered}"
			/>
		</figure>
	{/if}
	<a aria-label="link" class="hovernone absolute t0 w100 h100vh z10" href={src.slug}>&nbsp; </a>
</div>
