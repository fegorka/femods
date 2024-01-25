<script setup lang="ts">
import {onMounted} from 'vue';

import WrapperGeneral from '@/renderer/components/base/wrappers/WrapperGeneral.vue';


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