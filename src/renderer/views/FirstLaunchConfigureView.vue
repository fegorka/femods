<script setup lang="ts">
import WrapperGeneral from "@/renderer/components/base/WrapperGeneral.vue";
import FieldGeneral from "@/renderer/components/base/fields/FieldGeneral.vue";
import NavWindowContainer from "@/renderer/components/base/NavWindowContainer.vue";
import ImageTitle from "@/renderer/components/base/images/imageTitle.vue";
// import PrimaryButton from '@/renderer/components/base/buttons/PrimaryButton.vue';
import GeneralButton from "@/renderer/components/base/buttons/GeneralButton.vue";
import SecondaryButton from "@/renderer/components/base/buttons/SecondaryButton.vue";
import IconButton from "@/renderer/components/base/buttons/IconButton.vue";
import TextSeparator from "@/renderer/components/base/separators/TextSeparator.vue";

import {useThemeStore} from "@/renderer/stores/themeStore.ts";

import {onMounted} from 'vue';

onMounted(async () => {
	console.log('FirstLaunchConfigureView mounted');
	// const result = await ipcRenderer.invoke('getOsName');
	// console.log(result);
	// ipcRenderer.invoke('getOsName').then((result) => {
	// console.log(result);
	// })
	// console.log(ipcRenderer.invoke('getOsName'));
});

const themeStore = useThemeStore();
const themeColors = themeStore.getColorsByTheme();
</script>

<template>
	<NavWindowContainer>
		<template #left-side>
			<IconButton
				:icon-name="'close'"
				:fill-color-hex="themeColors.baseWhiteColor"
			/>
		</template>
		<template #right-side>
			<IconButton
				:icon-name="'menu'"
				:fill-color-hex="themeColors.baseWhiteColor"
			/>
		</template>
	</NavWindowContainer>
	<h1>11111</h1>
</template>

<style scoped lang="scss">
.main-action-container {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	height: 100%;
}

.main-action-container__add-pack-block {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	gap: 0.25em;
}

.main-action-container__auth-block {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 0.25em;
}

.main-action-container__buttons-block {
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	gap: 0.25em;
}

.main-buttons-container__button {
	width: 100%;
}
</style>
