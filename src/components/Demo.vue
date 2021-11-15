<template>
  <h1>{{ msg }}</h1>
  <div>默认的count:{{ state.count }}</div>
  <button @click="increment">增加</button>
</template>

<script setup lang="ts">
import { reactive, computed, ref, Ref } from "vue";

const msg = ref<string>("this is demo page");

type IState = {
  count: number;
  double: number;
};

const state: IState = reactive({
  count: 0,
  double: computed(() => state.count * 2),
});

function increment() {
  state.count++;
}
</script>
