import { createRouter, createWebHistory } from 'vue-router';
import dashboard from './vue/Pages/Dashboard.vue';
import account from './vue/Pages/Account.vue';
import settings from './vue/Pages/Settings.vue';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: dashboard
    },
    {
        path: '/account',
        name: 'account',
        component: account
    },
    {
        path: '/settings',
        name: 'settings',
        component: settings
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;