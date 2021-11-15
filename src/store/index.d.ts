import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { State } from "./index";

// 模块扩展
// this.$store强类型支持
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
