import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import user from "./modules/user";
import { UserState } from "./modules/user";

// 1.创建一个 InjectionKey 其实就是一个泛型

export interface State {
  count: number;
  user?: UserState;
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
  modules: {
    user,
  },
});
