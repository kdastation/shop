<template>
  <button
    :class="[
      'green_category_button',
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
export interface GreenButtonCategoryProps {
  isActive: boolean;
}

const props = defineProps<GreenButtonCategoryProps>();
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.green_category_button {
  font-style: normal;
  font-weight: 600;
  font-size: 1.625rem;
  padding: 1.153em 0.961em;
  color: #ffffff;
  background-color: $color_green;
  border-radius: 60%;
}
.active {
  background-color: $color_white;
  color: $color_black;
}
</style>
