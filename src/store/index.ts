import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { counterModule, counterState } from "@/store/modules/counter";

export interface State {
  counter: counterState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({});
store.registerModule("counter", counterModule);
export function useStore() {
  return baseUseStore(key);
}
