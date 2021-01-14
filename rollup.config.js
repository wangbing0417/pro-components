import fs from 'fs'
import path from 'path'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'
// import css from 'rollup-plugin-css-only'

const isDev = process.env.NODE_ENV !== 'production'

const root = path.resolve(__dirname, 'packages')

// 读取 packages 中的所有包
module.exports = fs
  .readdirSync(root)
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory() && item.startsWith('pro-'))
  .map(item => {
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      external: ['vue', 'vue-router'],
      input: path.resolve(root, item, 'index.ts'),
      output: {
        globals: {
          vue: 'Vue'
        },
        name: 'beer-pro',
        file: path.join(root, item, pkg.module),
        format: 'es'
      },
      plugins: [
        // css(),
        vue({
          include: /\.vue$/,
          css: false
        }),
        scss({ include: /\.scss$/, sass: dartSass }),
        esbuild({
          include: /\.[jt]s$/,
          minify: !isDev,
          target: 'es2015'
        }),
        // 生产环境开启压缩
        !isDev && terser()
      ]
    }
  })
