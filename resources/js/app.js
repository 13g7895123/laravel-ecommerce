import './bootstrap';

import { createApp } from 'vue';
import App from './vue/App.vue';
import './../../src/style.css'
import router from './route.js'

createApp(App)
    .use(router)
    .mount('#app')
