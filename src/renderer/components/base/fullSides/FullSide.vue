<script setup lang="ts">
	import { ColorHex } from '@/types';
	import GeneralCorner from '@/renderer/components/base/corners/GeneralCorner.vue';
	import LineSide from '@/renderer/components/base/lineSides/LineSide.vue';


	interface Props {
		fillColorHex: ColorHex,
		innerStrokeColorHex: ColorHex,
		outerStrokeColorHex: ColorHex,
		rounded: 'general' | 'small',
	}
	
	const props = defineProps<Props>()
</script>


<template>
  <div class="full-side">
    <GeneralCorner 
      class="full-side__top-corner"
      :fill-color-hex="props.fillColorHex" 
      :inner-stroke-color-hex="props.innerStrokeColorHex"
      :outer-stroke-color-hex="props.outerStrokeColorHex" 
      :rounded="props.rounded" 
    />
    <LineSide 
      class="full-side__line"
      :fill-color-hex="props.fillColorHex" 
      :inner-stroke-color-hex="props.innerStrokeColorHex"
      :outer-stroke-color-hex="props.outerStrokeColorHex" 
    />
    <GeneralCorner 
      class="full-side__bottom-corner"
      :fill-color-hex="props.fillColorHex" 
      :inner-stroke-color-hex="props.innerStrokeColorHex"
      :outer-stroke-color-hex="props.outerStrokeColorHex" 
      :rounded="props.rounded" 
    />
  </div><!-- full-side-->
</template>


<style scoped lang="scss">

	.full-side {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;

		height: 100%;
		width: fit-content;
		flex-shrink: 0;
	}
	.full-side__bottom-corner {
		transform: rotate(-90deg);
	}
</style>