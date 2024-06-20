<script context="module">
	import { MenuChapterListItemsLeft } from '../../../constants/objects/MenuChapterListItems';
	import MenuChaptersListItem from '../atoms/MenuChaptersListItem.svelte';
</script>

<div>
	{#each MenuChapterListItemsLeft as item}
		<MenuChaptersListItem {item} />
	{/each}
</div>
