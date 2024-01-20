<script setup lang="ts">
	import { useThemeStore } from '@/renderer/stores/themeStore.ts';
	const themeStore = useThemeStore();
	const sideDirection = themeStore.getUIElementsPositionBySystem();
</script>


<template>
  <nav
    class="nav-window-container"
    :class="{'_reverse': (sideDirection === 'right')}"
  >
    <div
      class="nav-window-container__side"
      :class="{'_reverse': (sideDirection === 'right')}"
    >
      <slot name="main-side" />
      <slot
        v-if="sideDirection === 'left'"
        name="static-left-side"
      />
      <slot
        v-if="sideDirection === 'right'"
        name="static-right-side"
      />
    </div><!-- nav-window-container__side -->
    <div
      class="nav-window-container__side"
      :class="{'_reverse': (sideDirection === 'left')}"
    >
      <slot name="support-side" />
      <!-- The names may be confusing, but it should be exactly like that, because the position changes from row-reverse -->
      <slot
        v-if="sideDirection === 'right'"
        name="static-left-side"
      />
      <slot
        v-if="sideDirection === 'left'"
        name="static-right-side"
      />
    </div><!-- nav-window-container__side -->
    <slot />
  </nav>
</template>


<style scoped lang="scss">
	.nav-window-container {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		height: 3rem;
		width: 100%;
		
		padding-top: 0.75em;

		&._reverse{
			flex-direction: row-reverse;
		}
	}
	.nav-window-container__side {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 100%;
		&._reverse{
			flex-direction: row-reverse;
		}
	}
</style>