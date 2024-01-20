<script setup lang="ts">
	import { ColorHex } from '@/types';


	interface Props {
		fillColorHex: ColorHex,
		iconName: 'menu'
			| 'arrowBack'
			| 'arrowLeft'
			| 'arrowRight'
			| 'close'
			| 'remove'
	}

	interface IconAltTexts {
		[iconName: string]: string,
	}

	const props = defineProps<Props>();

	const baseIconSvgPathPrefix = 'src/renderer/assets/icons/';
	const baseIconSvgExtensionPostfix = '.svg'
	const iconAltTexts: IconAltTexts = {
		close: 'Иконка в форме крестика (закрытие, удаление, отмена)',
	}
	console.log(props.fillColorHex)
</script>

<template>
  <img
    class="general-icon"
    :src="baseIconSvgPathPrefix + props.iconName + baseIconSvgExtensionPostfix"
    :alt="iconAltTexts[props.iconName]"
  >
</template>

<style scoped lang="scss">
	.general-icon {
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
		fill: v-bind('props.fillColorHex');
	}
</style>