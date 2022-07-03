<template>
  <ul class="social">
    <li class="social__item">
      <a class="social__link" href="#"
        ><img
          class="social__image"
          src="../assets/facebook-icon.svg"
          alt="facebook"
      /></a>
    </li>
    <li class="social__item">
      <a class="social__link" href="#"
        ><img
          class="social__image"
          src="../assets/twitter-icon.svg"
          alt="twitter"
      /></a>
    </li>
    <li class="social__item">
      <a class="social__link" href="#"
        ><img
          class="social__image"
          src="../assets/instagram-icon.svg"
          alt="instagram"
      /></a>
    </li>
  </ul>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.social {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}
</style>
