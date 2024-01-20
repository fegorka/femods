<script setup lang="ts">
	import { useThemeStore } from '@/renderer/stores/themeStore.ts';
	const themeStore = useThemeStore();
	const themeColors = themeStore.getColorsByTheme();
</script>

<template>
  <span class="text-separator  text _pixels">
    <div class="text-separator__line" />
    <slot class="text-separator__text" />
    <div class="text-separator__line" />
  </span>
</template>

<style scoped lang="scss">
	.text-separator {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.75em;
		padding: 0.375em;
	}

	.text-separator__line {
		height: 0.25rem;
		width: 100%;
		box-shadow: 
			0 0.125rem 0 0 v-bind('themeColors.baseBlackColor') inset,
			0 0.25rem 0 0 v-bind('themeColors.baseGrayColor') inset,
		;
	}
</style>
