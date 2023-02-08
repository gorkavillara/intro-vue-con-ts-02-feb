import { createApp } from "vue";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteLocationNormalized,
} from "vue-router";
import routes from "./routes";

import App from "./App.vue";
const tienePermiso = async (to: RouteLocationNormalized): Promise<boolean> => {
    // El usuario está registrado?
    // El usuario registrado tiene acceso a ese to
    return true
}

const app = createApp(App);

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return to.hash ? { el: to.hash } : new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, left: 0, behavior: "smooth" }), 300);
    });
  },
});

router.beforeEach(async (to, from) => {
    const hasPermission = await tienePermiso(to)
    if (hasPermission) {
        return true
    }
    return '/login'
})

app.use(router);

app.mount("#app");
