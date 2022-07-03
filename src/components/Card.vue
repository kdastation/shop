<template>
  <article class="card">
    <div class="card_box" :style="{ backgroundColor: product.color }">
      <img
        class="card_box__image"
        :src="require(`../assets/${product.img}`)"
        alt="image"
      />
      <div class="card_box__content">
        <h6 class="card_box__title">{{ product.name }}</h6>
        <div class="card_box__rating"></div>
        <p class="card_box__price">${{ product.price }}</p>
      </div>
    </div>
    <div class="card__button_wrapper">
      <GreenButton :full-width="true">Add to cart</GreenButton>
    </div>
  </article>
</template>

<script lang="ts" setup>
import GreenButton from "@/ui-components/GreenButton.vue";
import { defineProps } from "vue";
import { IProduct } from "@/types/models/product";
interface CardProps {
  product: IProduct;
}
const props = defineProps<CardProps>();
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.card_box {
  padding: 0.4375rem 1.3125rem 1.125rem 1.3125rem;
  background-color: #ecfef4;
  margin-bottom: 1.8125rem;
  &__content {
    padding: 1.9375rem 3.1875rem;
    background-color: $color_white;
    color: $color_black;
    font-size: 1.3125rem;
  }
  &__image {
    display: block;
    max-width: 196px;
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 0 auto;
  }
  &__title {
    font-weight: 500;
    line-height: 1.6666em;
  }
  &__price {
    font-weight: 600;
    line-height: 1.238em;
  }
}
</style>
