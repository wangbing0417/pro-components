import { setupGlobalOptions } from './composables/globalConfig'
import { version } from '../package.json'
import { ProLayout } from './components/ProLayout/index.js'

const components = [ProLayout]

const install = (app, opts = {}) => {
  app.use(setupGlobalOptions(opts))

  components.forEach(component => {
    app.use(component)
  })
}

const ProComponents = {
  version,
  install
}

export { version, install, ProLayout }

export default ProComponents
