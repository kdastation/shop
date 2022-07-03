import { ref } from "vue";

export const useFetching = (callback: Function) => {
  const isLoading = ref(false);
  const error = ref<null | string>(null);

  const fetching = async (...params: any) => {
    isLoading.value = true;
    try {
      await callback(...params);
    } catch (error: any) {
      error.value = error?.message || "Произошла ошибка";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    isFetching: isLoading,
    error,
    fetching,
  };
};
