import { GetterTree, Module, Payload, ActionTree } from "vuex";
import { State } from "@/store";

export interface counterState {
  count: number;
}

export const counterModule: Module<counterState, State> = {
  state: {
    count: 0,
  },
  mutations: {
    inc(state, payload: number) {
      state.count = state.count + payload;
    },
  },
  actions: {
    fetch({ commit }, payload: number) {
      setTimeout(() => {
        commit("inc", payload);
      }, 2000);
    },
  },
  namespaced: true,
};
