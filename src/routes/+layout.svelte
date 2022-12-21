<script>
	import { page } from '$app/stores';
	import './styles.css';
	export let data;
	const { post } = data;
	let visible;
	function handleToggle() {
		visible = !visible;
	}
</script>

{#if $page.url.pathname === '/'}
	<header class="fixed t0 r0 z10 max">
		<h1>
			<button on:click={handleToggle}> Maxime Delvaux </button>
		</h1>
		{#if visible}
			<div class="modal p25">
				<div class="fixed t0 r0">
					<button on:click={handleToggle}>×</button>
				</div>
				{@html post.content.rendered}
			</div>
		{/if}
	</header>
{/if}
<slot />
