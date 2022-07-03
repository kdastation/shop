<template>
  <div v-if="isLoading">Loading...</div>
  <div v-if="isError">Произошла ошибка</div>
  <slot v-if="!isLoading && !isError"></slot>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface WrapperLoaderErrorProps {
  isLoading: boolean;
  isError: boolean;
}

const props = defineProps<WrapperLoaderErrorProps>();
</script>

<style scoped></style>
