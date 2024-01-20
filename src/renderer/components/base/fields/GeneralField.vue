<script setup lang="ts">
import { ColorHex } from "@/types";
import GeneralContainer from "@/renderer/components/base/containers/GeneralContainer.vue";

interface Props {
  placeholder: string;
  placeholderColorHex: ColorHex;
  textColorHex: ColorHex;
  fillColorHex: ColorHex;
  innerStrokeColorHex: ColorHex;
  outerStrokeColorHex: ColorHex;
  rounded: "general" | "small";
}

const props = defineProps<Props>();
</script>

<template>
  <button class="field-general text _pixels no-drag">
    <GeneralContainer
      class="field-general__body"
      :fill-color-hex="props.fillColorHex"
      :inner-stroke-color-hex="props.innerStrokeColorHex"
      :outer-stroke-color-hex="props.outerStrokeColorHex"
      :rounded="props.rounded"
    >
      <div class="field-general__input-wrapper">
        <input
          class="field-general__body text _pixels"
          :placeholder="props.placeholder"
        >
      </div>
    </GeneralContainer>
  </button><!-- field-general -->
</template>

<style scoped lang="scss">
.field-general {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  height: 3.3125rem;
  width: 100%;

  border: none;
  background-color: transparent;

  cursor: pointer;
  transition: all 100ms ease-out;
}

.field-general__body::placeholder {
  color: v-bind("props.placeholderColorHex");
}

.field-general__input-wrapper {
  box-sizing: border-box;
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0 0.5em;

  width: 100%;
  height: 100%;
}

.field-general__body {
  box-sizing: border-box;
  display: flex;
  align-items: center;

  font-size: 1rem;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;

  background-color: transparent;
}
</style>
