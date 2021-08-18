<script>
	export let src;
</script>

<div class="bg-white z2">
	<header class="z10 front-header">
		<h2>
			<a class="block p25" href={src.slug}>
				{src.title.rendered}
			</a>
		</h2>
	</header>

	{#if src.acf.image === false}
		<figure class="front-fig">
			<video class="lazy" autoplay loop playsinline>
				<source data-src={src.acf.video1080p.url} type="video/mp4" />
				<track default kind="captions" />
			</video>
		</figure>
	{:else}
		<figure class="front-fig">
			<img
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
	<a class="hovernone absolute t0 w100 h100vh " href={src.slug}>&nbsp; </a>
</div>
