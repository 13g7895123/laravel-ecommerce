import './bootstrap';

import { createApp } from 'vue';
import App from './vue/App.vue';
import './../../src/style.css'
import router from './route.js'
// import { createVuetify } from './plugins/vuetify.js'
import vuetify from './plugins/vuetify';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

createApp(App)
    .use(router)
    .use(vuetify)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
