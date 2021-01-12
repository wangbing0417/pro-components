import type { App } from 'vue'
import './src/styles/index.css'
import ProLayout from './src/Layout.vue'

ProLayout.install = (app: App): void => {
  app.component(ProLayout.name, ProLayout)
}

export default ProLayout
