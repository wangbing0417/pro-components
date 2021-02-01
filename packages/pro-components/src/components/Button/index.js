import ProButton from './src/Button.vue'

ProButton.install = function (app) {
  app.component(ProButton.name, ProButton)
}

export { ProButton }
