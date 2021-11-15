import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// 1.创建一个 InjectionKey 其实就是一个泛型

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
