<script setup lang="ts">
	interface Props {
		pathToImageSource: string,
		altImageText: string,
	}
	const props = defineProps<Props>();
</script>

<template>
  <div class="image-title">
    <img
      class="image-title__content"
      :src="props.pathToImageSource"
      :alt="props.altImageText"
    >
  </div><!-- image-title -->
</template>

<style scoped lang="scss">
	.image-title {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;

		width: 100%;
		height: 5rem;

		padding: 0 0.375rem;
	}

	.image-title__content {
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}
</style>