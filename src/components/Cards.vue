<template>
  <Card v-for="product in products" :key="product.id" :product="product" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IProduct } from "@/types/models/product";
import Card from "@/components/Card.vue";

const products = ref<IProduct[]>([
  { id: 1, price: 2000000, name: "Ведьмак 3", img: "img" },
  { id: 2, price: 200000, name: "Ведьмак 2", img: "img" },
]);
</script>

<style scoped></style>
