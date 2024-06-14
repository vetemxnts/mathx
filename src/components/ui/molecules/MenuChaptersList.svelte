<script context="module">
	import { MenuChapterListItems } from '../../../constants/objects/MenuChapterListItems';
	import MenuChaptersListItem from '../atoms/MenuChaptersListItem.svelte';
</script>

<article class="flex flex-col gap-4 min-w-max overflow-y-scroll shadow-base">
	{#each MenuChapterListItems as item}
		<MenuChaptersListItem {item} />
	{/each}
</article>
