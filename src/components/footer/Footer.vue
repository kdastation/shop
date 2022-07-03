<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__top">
          <div class="footer__form">
            <FooterForm />
          </div>
          <FooterMenu :items="footerMenuService" />
          <FooterMenu :items="footerMenuAbout" />
          <FooterMenu :items="footerMenuHelp" />
        </div>
        <div class="footer__bottom">
          <div class="footer__copyright">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <Social />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {
  footerMenuService,
  footerMenuAbout,
  footerMenuHelp,
} from "@/data-components/data-footer-menus";
import FooterMenu from "@/components/footer/footer-menu/FooterMenu.vue";
import FooterForm from "@/components/forms/FooterForm.vue";
import Social from "@/components/Social.vue";
</script>

<style scoped lang="scss">
.footer {
  padding: 2.5rem 0 8.0625rem 0;
  border-top: 1px solid rgba(#111111, 0.1);
  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4.375rem;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
  }
  &__copyright {
    display: flex;
    align-items: center;
    gap: 2.4375rem;
  }
}
.container {
  max-width: 1088px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
