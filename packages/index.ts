import type { App, ComponentOptions } from 'vue'
import { config, InstallOptions } from './utils/config'
import ProButton from './pro-button'

const components: Record<string, ComponentOptions> = {
  ProButton
}

const install = (app: App, options?: InstallOptions): void => {
  const _options = Object.assign({}, config, options)

  app.provide('ProOptions', _options)

  for (const key in components) {
    const item = components[key]
    app.component(item.name || key, item)
  }
}

export { ProButton }

export default {
  install
}
