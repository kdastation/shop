<template>
  <div class="users_avatars">
    <div class="user_avatar">
      <img src="../assets/user-avatar-1.png" alt="user" />
    </div>
    <div class="user_avatar">
      <img src="../assets/user-avatar-2.png" alt="user" />
    </div>
    <div class="user_avatar">
      <img src="../assets/user-avatar-3.png" alt="user" />
    </div>
    <div class="user_avatar">
      <img src="../assets/user-avatar-4.png" alt="user" />
    </div>
    <h4 class="users_avatars__text">15k Well Reviews</h4>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.users_avatars {
  display: flex;
  align-items: center;
  .user_avatar:not(:first-child) {
    margin-left: -2rem;
  }
  &__text {
    width: 8.125rem;
    margin-left: 1rem;
  }
}
.user_avatar {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
