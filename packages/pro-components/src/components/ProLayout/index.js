import ProLayout from './src/ProLayout.vue'

ProLayout.install = function (app) {
  app.component(ProLayout.name, ProLayout)
}

export { ProLayout }
