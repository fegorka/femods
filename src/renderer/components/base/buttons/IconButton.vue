<script setup lang="ts">
	import { ColorHex, IconName } from '@/types';
	import GeneralButton from '@/renderer/components/base/buttons/GeneralButton.vue';
	import GeneralIcon from '@/renderer/components/base/icons/GeneralIcon.vue';
	import { useThemeStore } from '@/renderer/stores/themeStore.ts';

	interface Props {
		fillColorHex: ColorHex,
		iconName: IconName,
	}
	const props = defineProps<Props>();
	const themeStore = useThemeStore();
</script>

<template>
  <GeneralButton
    class="icon-button"
    :text-color-hex="themeStore.getColorsByTheme().baseWhiteColor"
    :fill-color-hex="themeStore.getColorsByTheme().baseDarkColor" 
    :inner-stroke-color-hex="themeStore.getColorsByTheme().baseGrayColor"
    :outer-stroke-color-hex="themeStore.getColorsByTheme().baseBlackColor" 
    :bottom-stroke-color-hex="themeStore.getColorsByTheme().baseBlackColor"
    :rounded="'small'"
    :scale="'small'"
  >
    <GeneralIcon
      :icon-name="props.iconName"
      :fill-color-hex="props.fillColorHex"
    />
  </GeneralButton>
</template>

<style scoped lang="scss">
	.icon-button {
		width: 2rem;
		height: 2rem;
		flex-shrink: 0;
	}
</style>