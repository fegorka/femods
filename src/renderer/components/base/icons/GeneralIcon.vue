<script setup lang="ts">
	import { ColorHex, IconName } from '@/types';

	interface Props {
		fillColorHex: ColorHex,
		iconName: IconName,
	}
	
	const props = defineProps<Props>();
	const iconName = props.iconName.toString();
</script>

<template>
  <svg
    v-if="iconName === 'close' || iconName === 'remove'"
    class="general-icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  ><path
    d="M5 5H7V7H5V5Z"
    :fill="props.fillColorHex"
  /><path
    d="M7 7H9V9H7V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M9 9H11V11H9V9Z"
    :fill="props.fillColorHex"
  /><path
    d="M9 5H11V7H9V5Z"
    :fill="props.fillColorHex"
  /><path
    d="M5 9H7V11H5V9Z"
    :fill="props.fillColorHex"
  /><path
    d="M3 11H5V13H3V11Z"
    :fill="props.fillColorHex"
  /><path
    d="M3 3H5V5H3V3Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 3H13V5H11V3Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 11H13V13H11V11Z"
    :fill="props.fillColorHex"
  /></svg>
  <svg
    v-if="iconName === 'menu'"
    class="general-icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  ><path
    d="M3 7H5V9H3V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M7 7H9V9H7V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 7H13V9H11V7Z"
    :fill="props.fillColorHex"
  /></svg>
  <svg
    v-if="iconName === 'edit'"
    class="general-icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  ><path
    d="M7 11H9V13H7V11Z"
    :fill="props.fillColorHex"
  /><path
    d="M7 7H9V9H7V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M9 11H11V13H9V11Z"
    :fill="props.fillColorHex"
  /><path
    d="M9 5H11V7H9V5Z"
    :fill="props.fillColorHex"
  /><path
    d="M5 9H7V11H5V9Z"
    :fill="props.fillColorHex"
  /><path
    d="M3 11H5V13H3V11Z"
    :fill="props.fillColorHex"
  /><path
    d="M5 11H7V13H5V11Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 3H13V5H11V3Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 11H13V13H11V11Z"
    :fill="props.fillColorHex"
  /></svg>
  <svg
    v-if="iconName === 'arrowBack'"
    class="general-icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  ><path
    d="M5 7H7V9H5V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M7 9H9V11H7V9Z"
    :fill="props.fillColorHex"
  /><path
    d="M7 5H9V7H7V5Z"
    :fill="props.fillColorHex"
  /><path
    d="M9 3H11V5H9V3Z"
    :fill="props.fillColorHex"
  /><path
    d="M9 11H11V13H9V11Z"
    :fill="props.fillColorHex"
  /></svg>
  <svg
    v-if="iconName === 'arrowLeft'"
    class="general-icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  ><path
    d="M9 5H7V7H9V5Z"
    :fill="props.fillColorHex"
  /><path
    d="M7 7H5V9H7V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M9 9H7V11H9V9Z"
    :fill="props.fillColorHex"
  /><path
    d="M9 7H7V9H9V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 5H9V7H11V5Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 9H9V11H11V9Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 7H9V9H11V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 11H9V13H11V11Z"
    :fill="props.fillColorHex"
  /><path
    d="M11 3H9V5H11V3Z"
    :fill="props.fillColorHex"
  /></svg>
  <svg
    v-if="iconName === 'arrowRight'"
    class="general-icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  ><path
    d="M7 5H9V7H7V5Z"
    :fill="props.fillColorHex"
  /><path
    d="M9 7H11V9H9V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M7 9H9V11H7V9Z"
    :fill="props.fillColorHex"
  /><path
    d="M7 7H9V9H7V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M5 5H7V7H5V5Z"
    :fill="props.fillColorHex"
  /><path
    d="M5 9H7V11H5V9Z"
    :fill="props.fillColorHex"
  /><path
    d="M5 7H7V9H5V7Z"
    :fill="props.fillColorHex"
  /><path
    d="M5 11H7V13H5V11Z"
    :fill="props.fillColorHex"
  /><path
    d="M5 3H7V5H5V3Z"
    :fill="props.fillColorHex"
  /></svg>
</template>

<style scoped lang="scss">
	.general-icon {
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
		fill: v-bind('props.fillColorHex');
	}
</style>