import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: (_) => {
      return { path: "/home" };
    },
  },
  {
    path: "/home",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ "../pages/About/About.vue"),
  },
  {
    path: "/vuexdemo",
    name: "Vuexdemo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ "../pages/Vuexdemo/Vuexdemo.vue"),
  },
  {
    path: "/:currentPath(.*)*", // 路由未匹配到，进入这个
    redirect: (_) => {
      return { path: "/404" };
    },
  },
];
const router = createRouter({
  history: createWebHistory(""),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});
export default router;
