import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'beer-pro-button/dist/index.css'
import 'beer-pro-layout/dist/index.css'

createApp(App).use(router).mount('#app')
