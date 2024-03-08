import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './dashboard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '',
        requiresAuth: false,
      },
    },
    {
      name: 'root',
      path: '/',
      component: () => import('@/views/layout/layout.vue'),
      children: [
        Dashboard
      ]
    }
  ]
});

export default router;
