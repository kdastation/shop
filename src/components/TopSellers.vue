<template>
  <section class="top_sellers">
    <div class="container">
      <h2 class="top_sellers__title">Top Sellers</h2>
      <nav class="top_sellers_categories">
        <ul class="top_sellers_categories__list">
          <li class="top_sellers_categories__item">
            <GreenCategoryButton :is-active="false"
              >Top Picks</GreenCategoryButton
            >
          </li>
          <li class="top_sellers_categories__item">
            <GreenCategoryButton :is-active="true">Watches</GreenCategoryButton>
          </li>
        </ul>
      </nav>
      <Cards />
    </div>
  </section>
</template>

<script lang="ts" setup>
import GreenCategoryButton from "@/ui-components/GreenCategoryButton.vue";
import Cards from "@/components/Cards.vue";
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.top_sellers {
  padding: 8.125rem 0 4.0625rem 0;
  &__title {
    font-weight: 600;
    font-size: 2.75rem;
    line-height: 3.375rem;
    color: $color_black;
    text-align: center;
    margin-bottom: 3.4375rem;
  }
}
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
