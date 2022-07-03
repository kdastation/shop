<template>
  <div>
    <h2 class="title">Subscribe to our Website</h2>
    <form class="footer_form">
      <input
        type="text"
        class="footer_form__input"
        placeholder="Email address"
      />
      <button class="footer_form__button" type="button">
        <img src="../../assets/arrow-button.svg" alt="arrow" />
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.title {
  max-width: 10.3125rem;
  width: 100%;
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 1.8125rem;
  letter-spacing: -0.3px;
  color: #111111;
  margin-bottom: 1.8125rem;
}
.footer_form {
  display: flex;

  &__input {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    letter-spacing: -0.204545px;
    border: none;
    outline: none;
    color: #111111;
    border-bottom: 1px solid rgba(#111111, 0.1);
  }
  &__button {
    background: $color_green;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 1.375rem 1.3125rem 1.1875rem 1.3125rem;
  }
}
</style>
