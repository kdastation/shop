import { IProduct } from "@/types/models/product";
import { IBasketItem } from "@/types/models/basket-item";

export class BasketService {
  static createNewProduct(product: IProduct): IBasketItem {
    return {
      product,
      quantity: 1,
    };
  }
  static findBasketItem(productsInBasket: IBasketItem[], product: IProduct) {
    const basketItemIndex = productsInBasket.findIndex((basketItem) => {
      return basketItem.product.id === product.id;
    });
    const isProductAdded = basketItemIndex >= 0;
    return {
      basketItemIndex,
      isProductAdded,
    };
  }
  static removeBasketItem(
    productsInBasket: IBasketItem[],
    basketItem: IBasketItem,
    basketItemIndex: number
  ) {
    if (basketItem?.quantity === 1) {
      productsInBasket.splice(basketItemIndex, 1);
    } else {
      basketItem.quantity--;
    }
  }
}
