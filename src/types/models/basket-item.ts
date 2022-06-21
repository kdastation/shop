import { IProduct } from "@/types/models/product";

export interface IBasketItem {
  product: IProduct;
  quantity: number;
}
