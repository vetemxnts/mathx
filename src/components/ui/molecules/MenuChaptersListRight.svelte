<script context="module">
	import { MenuChapterListItemsRight } from '../../../constants/objects/MenuChapterListItems';
	import MenuChaptersListItem from '../atoms/MenuChaptersListItem.svelte';
</script>

<div>
	{#each MenuChapterListItemsRight as item}
		<MenuChaptersListItem {item} />
	{/each}
</div>
