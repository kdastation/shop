<template>
  <Header />
  <Navigation />
  <MainProduct />
  <FeaturedProducts />
  <TrendingProducts />
  <Footer />
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import MainProduct from "@/components/MainProduct.vue";
import FeaturedProducts from "@/components/FeaturedProducts.vue";
import Footer from "@/components/footer/Footer.vue";
import Header from "@/components/Header.vue";
import TrendingProducts from "@/components/TrendingProducts.vue";
</script>

<style lang="scss"></style>
