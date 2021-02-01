import { ElButton } from './components/Button'
import { setupGlobalOptions } from './composables/globalConfig'
import { version } from '../package.json'

const components = [ElButton]

const install = (app, opts = {}) => {
  app.use(setupGlobalOptions(opts))

  components.forEach(component => {
    app.use(component)
  })
}

const element3 = {
  version,
  install
}

export { version, install }

export default element3
