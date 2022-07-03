<template>
  <li
    class="top_sellers_categories__item"
    @click="emit('changeCategory', category.id)"
  >
    <GreenCategoryButton :is-active="isActive">{{
      category.name
    }}</GreenCategoryButton>
  </li>
</template>

<script lang="ts" setup>
import GreenCategoryButton from "@/ui-components/GreenCategoryButton.vue";
import { defineEmits, defineProps } from "vue";
import { ICategory } from "@/types/models/category";
interface CategoryProps {
  category: ICategory;
  isActive: boolean;
}

interface CategoryEmits {
  (e: "changeCategory", id: number): void;
}

const props = defineProps<CategoryProps>();
const emit = defineEmits<CategoryEmits>();
console.log(props.category.id, props.isActive);
</script>

<style scoped lang="scss"></style>
