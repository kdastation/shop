<template>
  <nav class="top_sellers_categories">
    <ul class="top_sellers_categories__list">
      <Category
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :is-active="category.id === idActiveCategory"
        @changeCategory="changeCategory"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";
import { ICategory } from "@/types/models/category";
import Category from "@/components/categories/category/Category.vue";
interface CategoriesProps {
  categories: ICategory[];
  idActiveCategory: number;
}
interface CategoriesEmits {
  (e: "changeCategory", id: number): void;
}

const props = defineProps<CategoriesProps>();
const emit = defineEmits<CategoriesEmits>();
const changeCategory = (id: number) => {
  console.log(id);
  emit("changeCategory", id);
};
</script>

<style scoped lang="scss">
.top_sellers_categories {
  margin-bottom: 6.25rem;
  &__list {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
}
.container {
  max-width: 1353px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
