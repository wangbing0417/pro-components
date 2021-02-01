import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'pro-components/lib/theme-chalk/index.css'
import BeerPro from 'pro-components'
// import { ElButton } from 'pro-components'

// createApp(App).use(ElButton).mount('#app')
createApp(App).use(BeerPro).mount('#app')
