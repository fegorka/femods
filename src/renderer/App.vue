<script setup lang="ts">
import GeneralContainer from '@/renderer/components/base/containers/GeneralContainer.vue';

import {useThemeStore} from '@/renderer/stores/themeStore.ts';

const themeStore = useThemeStore();
const themeColors = themeStore.getColorsByTheme();

let transitionAnimationName = 'slide-fade';

// TODO | realise router dynamic transitions (https://learnvue.co/articles/vue-router-transitions)
// FIXME | route transition doesn't work, idk why (https://vuejs.org/guide/built-ins/transition)

</script>

<template>
	<GeneralContainer
		class="app-container"
		:fill-color-hex="themeColors.baseDeepColor"
		:inner-stroke-color-hex="themeColors.baseGrayColor"
		:outer-stroke-color-hex="themeColors.baseBlackColor"
		:rounded="'general'"
	>
		<div class="app-wrapper">
			<router-view v-slot="{ Component }">
				<transition :name="transitionAnimationName">
					<component :is="Component"/>
				</transition>
			</router-view>
		</div><!-- app-wrapper -->
	</GeneralContainer>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

@font-face {
	font-family: "Monocraft";
	src: url('assets/fonts/monocraft.ttf');
}


* {
	margin: 0;
	padding: 0;
}

*:not(input, textarea) {
	-moz-user-select: none;
	-khtml-user-select: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
}

.page {
	-webkit-app-region: drag;
	font-size: 1rem;
}

#app {
	width: 100%;
	height: 100%;
	flex-shrink: 0;
}

.app-wrapper {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: center;
}

body {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	height: 25.25rem;
	width: 100%;

	border-radius: 0.625rem;
}


.no-drag,
.no-drag > * {
	-webkit-app-region: no-drag;
	-webkit-user-drag: no-drag;
	/* -moz-user-select: all;
	user-select: all; */

	//XXX | UNCOMMENT IF NOT CLICKABLE ON WINDOWS
}

.material-symbols-rounded {
	color: var(--white-color);
	user-select: none;
	-moz-user-select: none;
	-khtml-user-select: none;
}

.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.default-route-animation-enter-from {
	opacity: 0;
	transform: translateY(30%);
}

.default-route-animation-enter-active {
	transition: all 0.2s ease-out;
}

.default-route-animation-leave-to {
	opacity: 0;
	transform: translateY(-30%);
}

.default-route-animation-leave-active {
	transition: all 0.2s ease-in;
}

.text {
	// TODO | class was taken from another project, need to adapt it (except _pixels) and replace css variables with v-bind themeStore
	font-family: 'Inter', sans-serif;
	font-stretch: normal;

	&._pixels {
		font-family: 'Monocraft', 'Inter', sans-serif;
		font-size: 1rem;
		font-weight: 500;
		line-height: 120%;
		color: v-bind('themeColors.baseWhiteColor')
	}

	&._small {
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 120%;
		color: var(--gray-color);
	}

	&._general {
		font-size: 1rem;
		font-weight: 400;
		line-height: 150%;
		color: var(--black-color);
	}

	&._general-medium {
		font-size: 1rem;
		font-weight: 500;
		line-height: 150%;
		color: var(--black-color);
	}

	&._title {
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 120%;
		color: var(--black-color);
	}

	&._black {
		color: var(--black-color);
	}

	&._dark {
		color: var(--dark-color);
	}

	&._gray {
		color: var(--gray-color);
	}

	&._accent {
		color: var(--accent-color);
	}
}

.main {
	height: 100%;
}

.nav-window {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 4.5rem;
}
</style>
