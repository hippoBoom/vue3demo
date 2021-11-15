import { Module } from "vuex";
import { State } from "../index";

const initState = {
  user: "My name is admin" as string,
};

export type UserState = typeof initState;

export default {
  namespaced: true,
  state: initState,
  mutations: {
    initUser(state, payload: string) {
      state.user = payload;
    },
  },
} as Module<UserState, State>;
