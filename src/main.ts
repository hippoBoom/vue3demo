import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { store, key } from "./store";
import router from "./router";

const app = createApp(App);
app.use(store, key);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
