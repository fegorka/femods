<script setup lang="ts">
import { ColorHex } from "@/types";
import GeneralContainer from "@/renderer/components/base/containers/GeneralContainer.vue";

interface Props {
  textColorHex: ColorHex;
  fillColorHex: ColorHex;
  innerStrokeColorHex: ColorHex;
  outerStrokeColorHex: ColorHex;
  bottomStrokeColorHex: ColorHex;
  rounded: "general" | "small";
  scale: "general" | "small";
}

const props = defineProps<Props>();
</script>

<template>
  <button
    class="button-primary text _pixels no-drag"
    :class="{
      'button-primary__general-size': props.scale === 'general',
      'button-primary__small-size': props.scale === 'small',
    }"
  >
    <GeneralContainer
      class="button-primary__body"
      :fill-color-hex="props.fillColorHex"
      :inner-stroke-color-hex="props.innerStrokeColorHex"
      :outer-stroke-color-hex="props.outerStrokeColorHex"
      :rounded="props.rounded"
    >
      <div class="button-primary__text">
        <slot :style="{ color: props.textColorHex }" />
      </div>
      <!-- button-primary__text -->
    </GeneralContainer>
  </button><!-- button-primary -->
</template>

<style scoped lang="scss">
.button-primary {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  filter: drop-shadow(0px 0.125rem 0 v-bind("props.bottomStrokeColorHex"));
  cursor: pointer;
  transition: all 100ms ease-out;
}

.button-primary__general-size {
  height: 3.3125rem;
  width: 100%;
}

.button-primary__small-size {
  height: 2rem;
  width: 2rem;
}

.button-primary__general-size > .button-primary__text {
  padding: 0 1.5em;
}

.button-primary__small-size > .button-primary__text {
  padding: 0;
}

.button-primary__body {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
}

.button-primary__text {
  box-sizing: border-box;
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}

.button-primary .button-primary__right-side {
  transform: scaleX(-1);
}

.button-primary:hover {
  margin-top: -0.125rem;
  margin-bottom: 0.125rem;
  filter: drop-shadow(0px 0.25rem 0 v-bind("props.bottomStrokeColorHex"));
}

.button-primary:active {
  margin-top: 0.125rem;
  margin-bottom: -0.125rem;
  filter: none;
}

.button-primary:focus-visible {
  filter: brightness(150%);
}
</style>
