import { onUnmounted, ref } from "vue";

export const useMediaQuery = (query: number) => {
  const isMobile = ref(false);
  handleView();
  function handleView() {
    console.log(isMobile.value);
    isMobile.value = window.innerWidth < query;
    console.log("WORK");
  }
  console.log("START");

  window.addEventListener("resize", handleView);

  onUnmounted(() => {
    window.removeEventListener("resize", handleView);
  });

  return {
    isMobile,
  };
};
