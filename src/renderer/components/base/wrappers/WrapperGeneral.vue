<template>
	<div class="wrapper-general">
		<slot/>
	</div>
</template>

<style scoped lang="scss">
.wrapper-general {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1;
	width: 100%;
	height: 100%;
	padding: 0 0.75em 1.375em;
}
</style>