<template>
  <nav class="footer_menu">
    <ul class="footer_menu__list">
      <FooterMenuItem v-for="item in items" :item="item" :key="item.id" />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { IFooterMenuItem } from "@/types/utils/footer-menu-item";
import FooterMenuItem from "@/components/footer/footer-menu/footer-meneu-item/FooterMenuItem.vue";

export interface FooterMenuProps {
  items: IFooterMenuItem[];
}

const props = defineProps<FooterMenuProps>();
</script>

<style scoped lang="scss">
.footer_menu {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
}
</style>
