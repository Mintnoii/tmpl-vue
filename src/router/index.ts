import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes)
});

export default router;
