<script setup lang="ts">
import {onMounted} from 'vue';

import {useThemeStore} from '@/renderer/stores/themeStore.ts';

import WrapperGeneral from '@/renderer/components/base/wrappers/WrapperGeneral.vue';

const themeStore = useThemeStore();


onMounted(async () => {
	console.log('LaunchView mounted');
});
</script>

<template>
	<WrapperGeneral>
		<div class="animation-name">
			<h1 class="text _pixels">LaunchView</h1>
		</div>
	</WrapperGeneral>
</template>

<style scoped lang="scss">

</style>