<template>
  <h1>{{ msg }}</h1>
  <el-button type="primary" @click="store.commit('increment')">增加</el-button>
  <h1>默认的count:{{ count }}</h1>
</template>

<script setup lang="ts">
import { reactive, computed, ref, Ref } from "vue";
import { useStore } from "vuex";
import { key } from "../store";

/*
 学习记录 setip中使用userStore时要类型化，共需要三步：
 1、定义 InjectionKey
 2、app安装时提供 InjectionKey
 3、传递InjectionKey 给 useStore
*/

const store = useStore(key);
const count = computed(() => store.state.count);
const msg = ref<string>("This is Vuex 4.0 demo page");

// type IState = {
//   count: number;
//   double: number;
// };

// const state: IState = reactive({
//   count: 0,
//   double: computed(() => $store.state.count * 2),
// });

function increment() {
  // state.count++;
}
</script>
