<template>
  <div class="card">
    <div class="card_name">{{ product.name }}</div>
    <div class="card_price">{{ product.price }}</div>
    <button @click="store.commit('basket/addProductInBasket', product)">
      Добавить в корзину
    </button>
    <button @click="store.commit('basket/removeProductFromBasket', product)">
      Удалить из корзины
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { IProduct } from "@/types/models/product";
import { useStore } from "@/store";
interface CardProps {
  product: IProduct;
}
const props = defineProps<CardProps>();
const store = useStore();
</script>

<style scoped></style>
