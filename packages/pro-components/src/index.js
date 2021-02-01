import { setupGlobalOptions } from './composables/globalConfig'
import { version } from '../package.json'
import { ProButton } from './components/Button/index.js'
import { ProIcon } from './components/Icon/index.js'

const components = [ProButton, ProIcon]

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

export { version, install, ProButton, ProIcon }

export default ProComponents
