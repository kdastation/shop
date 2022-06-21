import { Module } from "vuex";
import { IProduct } from "@/types/models/product";
import { State } from "@/store";
import { IBasketItem } from "@/types/models/basket-item";
import { BasketService } from "@/services/basket-service/basket-service";

export interface BasketModuleState {
  products: IBasketItem[];
  totalSum: number;
}

export const basketModule: Module<BasketModuleState, State> = {
  namespaced: true,
  state: {
    products: [],
    totalSum: 0,
  },
  mutations: {
    addProductInBasket({ products }, payload: IProduct) {
      const { isProductAdded, basketItemIndex } = BasketService.findBasketItem(
        products,
        payload
      );
      if (isProductAdded) {
        products[basketItemIndex].quantity++;
      } else {
        const newProduct = BasketService.createNewProduct(payload);
        products.push(newProduct);
      }
    },
    removeProductFromBasket({ products }, payload: IProduct) {
      const { basketItemIndex, isProductAdded } = BasketService.findBasketItem(
        products,
        payload
      );
      if (!isProductAdded) {
        return;
      }
      const product = products[basketItemIndex];
      BasketService.removeBasketItem(products, product, basketItemIndex);
    },
  },
};
