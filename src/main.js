// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/styles.css"
import i18n from "./lang/i18n"

createApp(App).use(router).use(i18n).mount('#app');
