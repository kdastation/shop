<template>
  <button
    :class="[
      'category_button',
      {
        active: isActive,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
interface GreenButtonCategoryProps {
  isActive: boolean;
}

const props = defineProps<GreenButtonCategoryProps>();
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.category_button {
  font-style: normal;
  font-weight: 600;
  font-size: 1.625rem;
  padding: 1.153em 0.961em;
  background-color: $color_white;
  color: $color_black;
  border-radius: 60%;
  transition: background-color 0.1s linear;
  &:hover {
    background-color: darken($color_green, 5);
    color: darken(#ffffff, 5);
  }
}
.active {
  color: #ffffff;
  background-color: $color_green;
  &:hover {
    color: darken(#ffffff, 5);
  }
}
</style>
