<script lang="ts">
	import type { MenuChapterListItemProps } from '../../../constants/types/MenuChapterListItemProps';

	export let item: MenuChapterListItemProps;
</script>

<a href={item.ref} class="text-neutral-200 text-2xl flex flex-row">
	<div class="size-12 grid place-items-center">{item.index}</div>
	<div class="w-max h-12 grid place-items-center">{item.name}</div>
</a>
<span class="h-px bg-white"></span>
