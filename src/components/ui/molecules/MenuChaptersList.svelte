<script context="module">
	import { MenuChapterListItems } from '../../../constants/objects/MenuChapterListItems';
	import MenuChaptersListItem from '../atoms/MenuChaptersListItem.svelte';
</script>

<main class="p-8 pl-32">
	{#each MenuChapterListItems as item}
		<MenuChaptersListItem {item} />
	{/each}
</main>
