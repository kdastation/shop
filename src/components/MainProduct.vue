<template>
  <section class="main_product">
    <div class="container">
      <div class="main_product__inner">
        <div class="main_product__text">
          <h1 class="main_product__title">Discover Our Latest Products</h1>
          <h3 class="main_product__description">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a product
          </h3>
          <div class="main_product__button_box">
            <GreenButton>Buy Now</GreenButton>
          </div>
          <UsersAvatars />
        </div>
        <div class="main_product__circle_wrapper">
          <div class="main_product__circle">
            <img
              src="../assets/main-product.png"
              alt="main product"
              class="main_product__img"
            />
            <span class="main_product__price">$50</span>
            <div class="main_product__player_user">
              <img src="../assets/main-product-player-user.png" alt="user" />
              <span>Play Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import GreenButton from "@/ui-components/GreenButton.vue";
import UsersAvatars from "@/components/UsersAvatars.vue";
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.main_product {
  padding: 4.6875rem 0 4.125rem 0;
  overflow: hidden;
  &__inner {
    display: flex;
    gap: 8rem;
  }
  &__text {
    max-width: 34.3125rem;
    width: 100%;
  }
  &__title {
    font-size: 4rem;
    color: $color_black;
    font-weight: 600;
    line-height: 4.875rem;
    margin-bottom: 1.875rem;
  }
  &__description {
    font-weight: 500;
    font-size: 1.3125rem;
    line-height: 2.1875rem;
    color: $color_black;
    margin-bottom: 3.25rem;
  }
  &__button_box {
    margin-bottom: 7rem;
  }
  &__circle_wrapper {
    margin-left: auto;
    position: relative;
    padding-right: 3rem;
  }
  &__player_user {
    text-align: center;
    position: absolute;
    left: -8rem;
    bottom: 1.5rem;
    img {
      border-radius: 50%;
    }
    span {
      display: block;
      font-weight: 500;
      font-size: 1.3125rem;
      color: $color_black;
    }
  }

  &__circle {
    background: #ecfef4;
    border-radius: 136px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.5rem 0;
    position: relative;
  }
  &__circle:after {
    content: "";
    width: 53px;
    height: 53px;
    position: absolute;
    left: -2rem;
    top: -2rem;
    background-image: url("@/assets/star.svg");
  }
  &__circle:before {
    content: "";
    width: 53px;
    height: 53px;
    position: absolute;
    bottom: -6.5rem;
    right: -2rem;
    background-image: url("@/assets/star.svg");
  }
  &__price {
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
    color: $color_black;
  }
}
.container {
  max-width: 1242px;
  padding: 10px;
  margin: 0 auto;
}
</style>
