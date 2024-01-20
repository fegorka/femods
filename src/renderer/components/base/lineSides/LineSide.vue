<script setup lang="ts">
	interface Props {
		fillColorHex: `#${string}`,
		innerStrokeColorHex: `#${string}`,
		outerStrokeColorHex: `#${string}`,
	}

	const props = defineProps<Props>()
</script>

<template>
  <div 
    :style="{

    }"
    class="general-side-line"
  />
</template>

<style scoped lang="scss">
	.general-side-line {
		box-sizing: border-box;
		display: flex;
		
		height: 100%;
		width: 100%;

		background-color: v-bind('props.fillColorHex');
		box-shadow:
			0.125rem 0 0 0 v-bind('props.outerStrokeColorHex') inset,
			0.25rem 0 0 0 v-bind('props.innerStrokeColorHex') inset
		;
	}
</style>
