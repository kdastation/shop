import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import {
  basketModule as basket,
  BasketModuleState,
} from "@/store/modules/basket.module";

export interface State {
  basket: BasketModuleState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    basket,
  },
});

export function useStore() {
  return baseUseStore(key);
}
