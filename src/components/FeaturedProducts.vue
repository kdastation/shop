<template>
  <section class="featured_products">
    <div class="container">
      <div class="featured_products__inner">
        <div class="featured_products__content">
          <h2 class="featured_products__subtitle">Apple wireless Airpod</h2>
          <div class="featured_products__images">
            <div class="featured_products__item">
              <img src="../assets/featured-item-1.png" alt="image 1" />
            </div>
            <div class="featured_products__item">
              <img src="../assets/featured-item-2.png" alt="image 2" />
            </div>
            <div class="featured_products__item">
              <img src="../assets/featured-item-3.png" alt="image 3" />
            </div>
          </div>
        </div>
        <div class="featured_products__text_content">
          <h2 class="featured_products__title">Our Featured Products</h2>
          <h3 class="featured_products__description">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a product
          </h3>
          <div class="featured_products__buttons">
            <GreenButton>Add to cart</GreenButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import GreenButton from "@/ui-components/GreenButton.vue";
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.featured_products {
  padding: 4.5625rem 0 2.8125rem 0;
  background-color: $bg_purple;
  &__inner {
    display: flex;
    align-items: center;
  }
  &__content {
    flex-grow: 1;
  }
  &__subtitle {
    font-weight: 600;
    font-size: 3.75rem;
    line-height: 4.5625rem;
    margin-bottom: 2rem;
    color: $color_white;
  }
  &__text_content {
    width: 43.3%;
    color: $color_white;
  }
  &__title {
    font-weight: 600;
    font-size: 2.75rem;
    line-height: 3.375rem;
    margin-bottom: 0.625rem;
  }
  &__description {
    font-weight: 500;
    font-size: 1.3125rem;
    line-height: 2.1875rem;
    margin-bottom: 2.1875rem;
  }
  &__images {
    display: flex;
    gap: 2rem;
  }
  &__item {
    height: 20.6875rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  &__item:nth-child(2n) {
    margin-top: -4rem;
  }
}
.container {
  max-width: 1290px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
