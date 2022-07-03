import { onMounted, ref, watch } from "vue";
import { IProduct } from "@/types/models/product";
import { SettingTrendingProducts } from "@/settings/setting-trending-products";
import { ProductsApiService } from "@/services/api-service/products-api-service";
import { useFetching } from "@/hooks/fetching-hook";
import { ApiUrlNames } from "@/services/api-service/api-url-names";

export const useProducts = (
  type: ApiUrlNames.PRODUCTS | ApiUrlNames.TRENDING_PRODUCTS,
  defaultIdActiveCategory: number
) => {
  const products = ref<IProduct[]>([]);
  const idActiveCategory = ref(defaultIdActiveCategory);

  const fetchProducts = async (idCategory: number) => {
    products.value = await ProductsApiService.getProducts(idCategory, type);
  };
  const {
    isLoading,
    error,
    fetching: upgradeFetchProducts,
  } = useFetching(fetchProducts);
  const changeCategory = (id: number) => {
    idActiveCategory.value = id;
  };

  onMounted(() => {
    upgradeFetchProducts(defaultIdActiveCategory);
  });

  watch([idActiveCategory], () => {
    upgradeFetchProducts(idActiveCategory.value);
  });
  return {
    idActiveCategory,
    changeCategory,
    error,
    products,
    isLoading,
  };
};
