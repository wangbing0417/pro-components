const fs = require('fs')
const path = require('path')
const componentPaths = [path.resolve(__dirname, '../src/components')]
const themePath = path.resolve(__dirname, '../../theme-chalk/src')
const fileSuffix = '.scss'
const indexFileName = 'index' + fileSuffix
const outputIndexFilePath = path.resolve(themePath, indexFileName)

;(function main() {
  save(genCssCode(getAllComponentName()))
})()

function getAllComponentName() {
  return componentPaths
    .map(componentPath => {
      return getComponentNameList(componentPath)
    })
    .reduce((total, components) => {
      return [...total, ...components]
    })
}

function getComponentNameList(componentPath) {
  return fs
    .readdirSync(componentPath)
    .filter(name => {
      return !name.startsWith('.')
    })
    .map(componentName => {
      return componentName.charAt(0).toLocaleLowerCase() + componentName.slice(1) + fileSuffix
    })
}

function genCssCode(componentNameList) {
  let indexContent = '@import "./base.scss";\n'

  return componentNameList.reduce((context, filePath) => {
    return (context += '@import "./' + filePath + '";\n')
  }, indexContent)
}

function save(cssCode) {
  fs.writeFileSync(outputIndexFilePath, cssCode)
}
