<script setup lang="ts">
	import GeneralButton from '@/renderer/components/base/buttons/GeneralButton.vue';
	import { useThemeStore } from '@/renderer/stores/themeStore.ts';
	const themeStore = useThemeStore();
</script>

<template>
  <GeneralButton
    :text-color-hex="themeStore.getColorsByTheme().baseWhiteColor"
    :fill-color-hex="themeStore.getColorsByTheme().accentPrimaryPositiveColor" 
    :inner-stroke-color-hex="themeStore.getColorsByTheme().accentSecondaryPositiveColor"
    :outer-stroke-color-hex="themeStore.getColorsByTheme().baseBlackColor" 
    :bottom-stroke-color-hex="themeStore.getColorsByTheme().baseBlackColor"
    :rounded="'general'"
    :scale="'general'"
  >
    <slot />
  </GeneralButton>
</template>