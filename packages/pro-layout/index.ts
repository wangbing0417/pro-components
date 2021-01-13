import type { App } from 'vue'
import './src/styles/index.scss'
import './src/styles/icon.scss'
import ProLayout from './src/Layout.vue'

ProLayout.install = (app: App): void => {
  app.component(ProLayout.name, ProLayout)
}

export default ProLayout
