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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;