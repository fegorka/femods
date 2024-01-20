<script setup lang="ts">
	import GeneralButton from '@/renderer/components/base/buttons/GeneralButton.vue';
	import { useThemeStore } from '@/renderer/stores/themeStore.ts';
	interface Props {
		scale: 'general' | 'small',
	}
	const props = defineProps<Props>();
	const themeStore = useThemeStore();

	/**
		* Now rounded and scale take the same values ​​(general | small),
		* but if they change later, this function will help convert the props
		* to the required rounded and scale values, that's why
		* you can't just put props.scale there
	*/
	function convertPropsScaleValueToGeneralButtonPropsRoundedValue(value: 'general' | 'small'): 'general' | 'small' {
		if(value === 'small') return 'general';
		if(value === 'general') return 'general';
		return 'general';
	}

		/**
		* Now rounded and scale take the same values ​​(general | small),
		* but if they change later, this function will help convert the props
		* to the required rounded and scale values, that's why
		* you can't just put props.scale there
	*/
	function convertPropsScaleValueToGeneralButtonPropsScaleValue(value: 'general' | 'small'): 'general' | 'small'{
		if(value === 'small') return 'general';
		if(value === 'general') return 'general';
		return 'general';
	}
</script>

<template>
  <GeneralButton
    :text-color-hex="themeStore.getColorsByTheme().baseWhiteColor"
    :fill-color-hex="themeStore.getColorsByTheme().baseDarkColor" 
    :inner-stroke-color-hex="themeStore.getColorsByTheme().baseGrayColor"
    :outer-stroke-color-hex="themeStore.getColorsByTheme().baseBlackColor" 
    :bottom-stroke-color-hex="themeStore.getColorsByTheme().baseBlackColor"
    :rounded="convertPropsScaleValueToGeneralButtonPropsRoundedValue(props.scale)"
    :scale="convertPropsScaleValueToGeneralButtonPropsScaleValue(props.scale)"
  >
    <slot />
  </GeneralButton>
</template>