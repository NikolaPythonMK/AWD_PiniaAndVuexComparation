import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import store from '../src/stores/store'

createApp(App).use(store).mount('#app')
