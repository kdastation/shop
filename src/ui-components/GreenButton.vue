<template>
  <button
    :class="[
      'green_button',
      {
        full_width: fullWidth,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
export interface GreenButtonProps {
  fullWidth?: boolean;
}
const props = defineProps<GreenButtonProps>();
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.green_button {
  font-weight: 600;
  font-size: 1.3125rem;
  padding: 1.047em 3.952em;
  color: #ffffff;
  cursor: pointer;
  background-color: $color_green;
  box-shadow: 0 25px 50px rgba(132, 94, 194, 0.15);
  border-radius: 0.476em;
  border: none;
  &:hover {
    background-color: darken($color_green, 5);
  }
}
.full_width {
  width: 100%;
}
</style>
