<template>
  <button
    :class="[
      'header_button',
      {
        header_button_green: green,
        header_button_white: white,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

export interface HeaderButtonProps {
  white?: boolean;
  green?: boolean;
}
const props = defineProps<HeaderButtonProps>();
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.header_button {
  font-size: 1rem;
  font-weight: 500;
  padding: 1.0625em 2.25em;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid $color_green;
  border-radius: 1.875em;
}
.header_button_green {
  background-color: $color_green;
  color: $color_white;
  &:hover {
    background-color: darken($color_green, 5);
  }
}
.header_button_white {
  background-color: $color_white;
  color: $color_black;
  &:hover {
    background-color: darken($color_white, 5);
  }
}
</style>
