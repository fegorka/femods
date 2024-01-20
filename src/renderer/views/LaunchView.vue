<script setup lang="ts">
import {onMounted} from 'vue';
import {useRouter} from 'vue-router'

import {useThemeStore} from '@/renderer/stores/themeStore.ts';
import {useApplicationActionsStore} from '@/renderer/stores/applicationActionsStore.ts';
import WrapperGeneral from '@/renderer/components/base/WrapperGeneral.vue';

const themeStore = useThemeStore();


const themeColors = themeStore.getColorsByTheme();

onMounted(async () => {
	console.log('HomeView mounted');
});
</script>

<template>
	<WrapperGeneral>
		<h1 class="text _pixels">LaunchView</h1>
	</WrapperGeneral>
</template>

<style scoped lang="scss">

</style>