<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">Features</li>
      <li class="nav__item">Products</li>
      <li class="nav__item">Blog</li>
      <li class="nav__item">About</li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.nav {
  background-color: $color_green;
  padding: 1.75rem 0;
  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4.6875rem;
  }
  &__item {
    font-weight: 600;
    font-size: 1.25rem;
    color: #ffffff;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: darken(#ffffff, 10%);
    }
  }
}
</style>
