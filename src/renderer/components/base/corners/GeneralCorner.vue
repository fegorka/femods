<script setup lang="ts">
import { ColorHex } from '@/types';

	interface Props {
		fillColorHex: ColorHex,
		innerStrokeColorHex: ColorHex,
		outerStrokeColorHex: ColorHex,
		rounded: 'general' | 'small',
	}
	const props = defineProps<Props>()

</script>

<template>
  <div class="corner-container">
    <svg 
      v-if="props.rounded === 'general'"
      class="corner _general-size"

      width="12" 
      height="12" 
      viewBox="0 0 12 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 6H12V12H8V6Z"
        :fill="props.fillColorHex"
      />
      <path
        d="M6 8H8V12H6V8Z"
        :fill="props.fillColorHex"
      />
      <path
        d="M4 6H6V12H4V6Z"
        :fill="props.innerStrokeColorHex"
      />
      <path
        d="M6 6H8V8H6V6Z"
        :fill="props.innerStrokeColorHex"
      />
      <path
        d="M2 10H4V12H2V10Z"
        :fill="props.innerStrokeColorHex"
      />
      <path
        d="M0 10H2V12H0V10Z"
        :fill="props.outerStrokeColorHex"
      />
      <path
        d="M2 6H4V10H2V6Z"
        :fill="props.outerStrokeColorHex"
      />
      <path
        d="M4 4H6V6H4V4Z"
        :fill="props.outerStrokeColorHex"
      />
      <path
        d="M6 2H10V4H6V2Z"
        :fill="props.outerStrokeColorHex"
      />
      <path
        d="M10 0H12V2H10V0Z"
        :fill="props.outerStrokeColorHex"
      />
      <path
        d="M6 4H10V6H6V4Z"
        :fill="props.innerStrokeColorHex"
      />
      <path
        d="M10 2H12V6H10V2Z"
        :fill="props.innerStrokeColorHex"
      />
    </svg>
    <svg 
      v-if="props.rounded === 'small'"
      class="corner _small-size"

      width="8" 
      height="8" 
      viewBox="0 0 8 8" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4H4V2H2V4Z"
        :fill="props.outerStrokeColorHex"
      />
      <path
        d="M0 8H2V4H0V8Z"
        :fill="props.outerStrokeColorHex"
      />
      <path
        d="M2 8H4V4H2V8Z"
        :fill="props.innerStrokeColorHex"
      />
      <path
        d="M4 2H8V0H4V2Z"
        :fill="props.outerStrokeColorHex"
      />
      <path
        d="M4 4H8V2H4V4Z"
        :fill="props.innerStrokeColorHex"
      />
      <path
        d="M4 6H6V4H4V6Z"
        :fill="props.innerStrokeColorHex"
      />
      <path
        d="M4 8H6V6H4V8Z"
        :fill="props.fillColorHex"
      />
      <path
        d="M6 8H8V6H6V8Z"
        :fill="props.fillColorHex"
      />
      <path
        d="M6 6H8V4H6V6Z"
        :fill="props.fillColorHex"
      />
    </svg><!-- corner -->
  </div><!-- corner-container -->
  <!--<div 
	:class="{
		'corner_general-size': props.rounded === 'general',
		'corner_small-size': props.rounded === 'small',
	}"
	:style="{ backgroundImage: `url('src/renderer/assets/corners/${props.rounded}-${props.color}.svg')`, }" class="corner"/> 
	-->
</template>


<style scoped lang="scss">
	.corner {
		box-sizing: border-box;
		display: flex;
		flex-shrink: 0;
		background-size: cover;
		background-repeat: no-repeat;

		&._general-size {
			height: 0.75rem;
			width: 0.75rem;
		}
		&._small-size {
			height: 0.5rem;
			width: 0.5rem;
		}
	}

</style>