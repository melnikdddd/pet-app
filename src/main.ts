import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import 'tailwindcss/tailwind.css';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import './registerServiceWorker'
import router from './router'
import {IconPack, library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import store from "@/store/store";

const app = createApp(App);

library.add(fas as unknown as IconPack[]);
library.add(fab as unknown as IconPack[]);
library.add(far as unknown as IconPack[]);

app
    .use(router)
    .use(store)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
