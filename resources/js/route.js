import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('./vue/Pages/Dashboard.vue')
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('./vue/Pages/Account.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('./vue/Pages/Settings.vue')
    },
    {
        path: '/shop1',
        name: 'shop1',
        component: () => import('./vue/Pages/shop1.vue')
    },
    {
        path: '/shop2',
        name: 'shop2',
        component: () => import('./vue/Pages/shop2.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;