<script setup lang="ts">
import {onMounted} from 'vue';
import {useRouter} from 'vue-router'

import {useThemeStore} from '@/renderer/stores/themeStore.ts';
import {useApplicationActionsStore} from '@/renderer/stores/applicationActionsStore.ts';

import NavWindowContainer from '@/renderer/components/base/NavWindowContainer.vue';
import WrapperGeneral from '@/renderer/components/base/WrapperGeneral.vue';
import IconButton from '@/renderer/components/base/buttons/IconButton.vue';

const router = useRouter();
const themeStore = useThemeStore();
const applicationActionsStore = useApplicationActionsStore();


const themeColors = themeStore.getColorsByTheme();

onMounted(async () => {
	console.log('HomeView mounted');
});
</script>

<template>
	<NavWindowContainer>
		<template #main-side>
			<IconButton
				@click="applicationActionsStore.closeApplication"
				:icon-name="'close'"
				:fill-color-hex="themeColors.baseWhiteColor"
			/>
		</template>
		<template #static-left-side>
			<IconButton
				@click="router.go(-1)"
				:icon-name="'arrowBack'"
				:fill-color-hex="themeColors.baseWhiteColor"
			/>
		</template>
	</NavWindowContainer>
	<WrapperGeneral>
		<h1 class="text _pixels">MenuView</h1>
	</WrapperGeneral>
</template>

<style scoped lang="scss">

</style>