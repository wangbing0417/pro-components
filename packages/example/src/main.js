import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'pro-components/lib/theme-chalk/index.css'
import 'pro-components/lib/theme-chalk/bundle.css'
import ProUI from 'pro-components'

createApp(App).use(ProUI).mount('#app')
