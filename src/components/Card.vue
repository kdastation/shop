<template>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem
    consequuntur, delectus dolores ex laboriosam praesentium voluptatem
    voluptatibus. Adipisci eius explicabo illo mollitia praesentium rem suscipit
    ullam! Adipisci, fugiat, rem.
  </div>
  <div @click="store.commit('counter/inc', 2)">+</div>
  <div>{{ store.getters["counter/count"] }}</div>
  <button @click="inc2"></button>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";

const store = useStore();
const inc2 = () => {
  store.dispatch("counter/fetch", 2);
};
</script>

<style scoped></style>
