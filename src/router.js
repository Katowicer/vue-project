import config from './config';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Form from './views/Form.vue';
const routes = [
  { path: "/vue-project", component: Home },
  { path: "/vue-project/form", component: Form },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
