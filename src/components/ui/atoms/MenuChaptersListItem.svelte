<script lang="ts">
	import type { MenuChapterListItemProps } from '../../../constants/types/MenuChapterListItemProps';

	export let item: MenuChapterListItemProps;
</script>

<a
	href={item.ref}
	class="text-neutral-200 text-xs lg:text-base xl:text-xl flex flex-row items-center group/item hover:bg-neutral-800 transition-backgroundColor duration-300 ease-smooth"
>
	<div class="min-w-12 min-h-8 lg:min-h-12 grid place-items-center">{item.index}</div>
	<span
		class="w-px h-0 group-hover/item:h-3 lg:group-hover/item:h-6 bg-white transition-height duration-300 ease-smooth"
	></span>
	<div class="w-max h-8 lg:h-12 px-4 grid place-items-center text-nowrap">{item.name}</div>
</a>
