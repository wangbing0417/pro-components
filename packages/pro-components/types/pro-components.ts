import { App } from 'vue'
import { ProUIComponent, ProUIComponentSize, ProUIHorizontalAlignment } from './component'

export { ProButton } from './button'

export interface InstallationOptions {
  locale: any
  i18n: any
  size: string
}

/** The version of element3 */
export let version: string

/**
 * Install all pro components into Vue.
 * Please do not invoke this method directly.
 * Call `app.use(ElementUI)` to install.
 */
// @ts-ignore
export function install(app: App, ...options: any[]): any

/** Pro component common definition */
export type Component = ProUIComponent

/** Component size definition for button */
export type ComponentSize = ProUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ProUIHorizontalAlignment
