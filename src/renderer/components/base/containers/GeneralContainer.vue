<script setup lang="ts">
	import { ColorHex } from '@/types';
	import FullSide from '@/renderer/components/base/fullSides/FullSide.vue';
	
	interface Props {
		fillColorHex: ColorHex,
		innerStrokeColorHex: ColorHex,
		outerStrokeColorHex: ColorHex,
		rounded: 'general' | 'small',
	}
	const props = defineProps<Props>()
</script>

<template>
  <div class="general-container">
    <FullSide 
      class="general-container__left-side"
      :fill-color-hex="props.fillColorHex" 
      :inner-stroke-color-hex="props.innerStrokeColorHex"
      :outer-stroke-color-hex="props.outerStrokeColorHex" 
      :rounded="props.rounded" 
    />
    <div class="general-container__body">
      <slot />
    </div>
    <FullSide 
      class="general-container__right-side"
      :fill-color-hex="props.fillColorHex" 
      :inner-stroke-color-hex="props.innerStrokeColorHex"
      :outer-stroke-color-hex="props.outerStrokeColorHex" 
      :rounded="props.rounded" 
    />
  </div><!-- general-container -->
</template>

<style scoped lang="scss">
.general-container {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		
		width: 100%;
		height: 100%;
	}

	.general-container__right-side {
		transform: scaleX(-1);
	}

	.general-container__body {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;

		width: 100%;
		height: 100%;

		background-color: v-bind('props.fillColorHex');
		box-shadow: 
			0 0.125rem 0 0 v-bind('props.outerStrokeColorHex') inset,
			0 0.25rem 0 0 v-bind('props.innerStrokeColorHex') inset,
			0 -0.125rem 0 0 v-bind('props.outerStrokeColorHex') inset,
			0 -0.25rem 0 0 v-bind('props.innerStrokeColorHex') inset
		;
	}

	.general-container__body_gray {
		background-color: var(--base-gray-color);
	}

	.general-container__body_dark {
		background-color: var(--base-dark-color);
	}

</style>