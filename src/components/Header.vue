<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a href="#" class="header__logo">
          <img src="../assets/logo.svg" alt="logo" />
        </a>
        <div class="header__control">
          <div class="header__input_box">
            <input
              type="text"
              class="header__input"
              placeholder="Search Items"
            />
            <div class="header__search_button">
              <button class="search__button">
                <img src="../assets/search-icon.svg" alt="search" />
              </button>
            </div>
          </div>
          <div class="header__buttons">
            <HeaderButton :white="true">
              <div class="header__button_content">
                <img src="../assets/basket-icon.svg" alt="" />
                <span>0 Items Added</span>
              </div>
            </HeaderButton>
            <HeaderButton :green="true">
              <div class="header__button_content">
                <img src="../assets/user-icon.svg" alt="" />
                Login or Sign Up
              </div>
            </HeaderButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import HeaderButton from "@/ui-components/HeaderButton.vue";
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.header {
  background-color: $color_white;
  &__inner {
    display: flex;
    align-items: center;
    height: $height_header;
    justify-content: space-between;
  }
  &__control {
    display: flex;
    align-items: center;
    gap: 2.375rem;
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 1.4375rem;
  }
  &__button_content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  &__input {
    font-weight: 500;
    font-size: 1rem;
    outline: none;
    line-height: 1rem;
    padding: 0.6875rem;

    background: #ffffff;
    box-shadow: 0 15px 50px rgba(46, 131, 158, 0.07);
    border-radius: 10px;
    border: none;
  }
  &__input::placeholder {
    color: rgba(41, 41, 48, 0.2);
  }
  &__input_box {
    position: relative;
  }
  &__search_button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.search__button {
  background-color: $color_green;
  width: 38px;
  height: 38px;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.container {
  height: 100%;
  max-width: 1290px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
