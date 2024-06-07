<script lang="ts">
	import { onMount } from 'svelte';
	import MenuBanner from '../molecules/MenuBanner.svelte';
	import MenuChaptersList from '../molecules/MenuChaptersList.svelte';

	let menu: HTMLElement | null = null;

	let x = 0;
	let y = 0;

	onMount(() => {
		function updateDisplay(event: MouseEvent) {
			if (!menu) return;

			x = event.pageX;
			y = event.pageY;

			if (y > 250) {
				let offset = event.pageY * 0.6 - 250;
				menu.style.transform = `translateY(-${offset}px)`;
			}
			console.log('works');
		}

		window.addEventListener('mousemove', updateDisplay, false);
		window.addEventListener('mouseenter', updateDisplay, false);
		window.addEventListener('mouseleave', updateDisplay, false);
	});
</script>

<main class="h-[100dvh] overflow-y-hidden" bind:this={menu}>
	<div class="fixed text-neutral-200">
		{x}
		{y}
	</div>
	<MenuBanner />
	<MenuChaptersList />
</main>
