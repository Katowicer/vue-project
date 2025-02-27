import config from './config';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Form from './views/Form.vue';
const routes = [
  { path: `/${config.BASE}`, component: Home },
  { path: `/${config.BASE}/form`, component: Form },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
