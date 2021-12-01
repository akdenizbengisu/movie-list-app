import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import store from "./store/index"
import axios from 'axios';

const app = createApp({})
app.config.globalProperties.$http = axios





createApp(App).use(router).use(store).mount('#app')
