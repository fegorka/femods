<script setup lang="ts">
import GeneralField from "@/renderer/components/base/fields/GeneralField.vue";
import {useThemeStore} from '@/renderer/stores/themeStore.ts';

const themeStore = useThemeStore();

interface Props {
	placeholder: string;
}

const props = defineProps<Props>();
</script>

<template>
	<GeneralField
		:placeholder="props.placeholder"
		:placeholder-color-hex="themeStore.getColorsByTheme().baseLightColor"
		:text-color-hex="themeStore.getColorsByTheme().baseWhiteColor"
		:fill-color-hex="themeStore.getColorsByTheme().baseDarkColor"
		:inner-stroke-color-hex="themeStore.getColorsByTheme().baseBlackColor"
		:outer-stroke-color-hex="themeStore.getColorsByTheme().accentSecondaryPositiveColor"
		:rounded="'general'"
		:scale="'general'"
	/>
</template>

<style scoped lang="scss">
.field-general {
	box-sizing: border-box;
	display: flex;
	flex-direction: row;

	height: 3.3125rem;
	width: 100%;

	border: none;
	background-color: transparent;

	cursor: pointer;
	transition: all 100ms ease-out;
}

.field-general__body::placeholder {
	color: v-bind("themeStore.getColorsByTheme().placeholderColorHex");
}

.field-general__input-wrapper {
	box-sizing: border-box;
	display: flex;

	align-items: center;
	justify-content: center;

	padding: 0 0.5em;

	width: 100%;
	height: 100%;
}

.field-general__body {
	box-sizing: border-box;
	display: flex;
	align-items: center;

	font-size: 1rem;
	border: none;
	outline: none;
	width: 100%;
	height: 100%;

	background-color: transparent;
}
</style>
