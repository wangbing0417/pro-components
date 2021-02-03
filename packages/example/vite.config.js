// @ts-nocheck
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx({})],
  alias: {
    '@xhs/yam-beer': path.resolve(__dirname, 'node_modules/@xhs/yam-beer')
  },
  optimizeDeps: {
    include: ['dayjs/plugin/localeData', 'dayjs/plugin/minMax', 'dayjs/plugin/localizedFormat', 'dayjs/locale/zh-cn']
  }
})
