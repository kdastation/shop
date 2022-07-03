<template>
  <section class="trending_products">
    <div class="container">
      <h2 class="trending_products__title">Trending Earphones</h2>
      <Categories
        :id-active-category="idActiveCategory"
        :categories="dataCategoriesTrendingEarphones"
        @changeCategory="changeCategory"
      />
      <WrapperLoaderError :is-loading="isLoading" :is-error="!!error">
        <Cards :products="products" />
      </WrapperLoaderError>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Cards from "@/components/Cards.vue";
import { dataCategoriesTrendingEarphones } from "@/data-components/data-categories";
import WrapperLoaderError from "@/utils-components/WrapperLoaderError.vue";
import Categories from "@/components/categories/Categories.vue";
import { useProducts } from "@/hooks/products-hook";
import { ApiUrlNames } from "@/services/api-service/api-url-names";
import { SettingTrendingProducts } from "@/settings/setting-trending-products";

const { error, idActiveCategory, changeCategory, products, isLoading } =
  useProducts(
    ApiUrlNames.TRENDING_PRODUCTS,
    SettingTrendingProducts.DEFAULT_ID_ACTIVE_CATEGORY
  );
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.trending_products {
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

.container {
  max-width: 1353px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>

//TODO: Нужно зарефакторить
