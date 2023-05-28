import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './scss/theme.css'
import './interceptors/axios'
import axios from "axios";


createApp(App).use(store).use(router).mount('#app')

const token = localStorage.getItem('jwt_token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
