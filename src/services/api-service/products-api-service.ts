import { api } from "@/services/api-service/api-main";
import { ApiUrlNames } from "@/services/api-service/api-url-names";
import { IProduct } from "@/types/models/product";

export class ProductsApiService {
  static async getProducts(
    idCategory: number = 1,
    type: ApiUrlNames.PRODUCTS | ApiUrlNames.TRENDING_PRODUCTS
  ): Promise<IProduct[]> {
    const response = await api.get<IProduct[]>(type, {
      params: {
        idCategory,
      },
    });
    return response.data;
  }
}
