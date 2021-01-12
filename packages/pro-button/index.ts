import { App } from 'vue'
import ProButton from './src/button.vue'

ProButton.install = (app: App): void => {
  app.component(ProButton.name, ProButton)
}

export default ProButton
