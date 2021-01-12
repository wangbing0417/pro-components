import { App } from 'vue'
import ProDiv from './src/div.vue'

ProDiv.install = (app: App): void => {
  app.component(ProDiv.name, ProDiv)
}

export default ProDiv
