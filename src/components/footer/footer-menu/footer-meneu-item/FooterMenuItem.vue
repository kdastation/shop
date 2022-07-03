<template>
  <li
    :class="[
      'footer_menu_item',
      {
        active: item.isActive,
      },
    ]"
  >
    {{ item.name }}
  </li>
</template>

<script lang="ts" setup>
import { IFooterMenuItem } from "@/types/utils/footer-menu-item";

export interface FooterMenuItemProps {
  item: IFooterMenuItem;
}
const props = defineProps<FooterMenuItemProps>();
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.footer_menu_item {
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.25rem;
  letter-spacing: -0.204545px;
  color: #111111;
  cursor: pointer;
  &:hover {
    color: darken($color_green, 10);
  }
}
.active {
  color: $color_green;
}
</style>
