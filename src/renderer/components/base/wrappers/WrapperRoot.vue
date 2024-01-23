<script setup>

// this wrapper does not change the position of the elements in any way
// it is required for those cases when elements need to be wrapped in a root container
// for example for <Transition> to work

</script>

<template>
	<div class="wrapper-root">
		<slot/>
	</div>
</template>

<style scoped lang="scss">
.wrapper-root {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1;
	width: 100%;
	height: 100%;
	min-height: 100vh;
}
</style>