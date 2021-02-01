import { App } from "vue";
import {
  ElementUIComponent,
  ElementUIComponentSize,
  ElementUIHorizontalAlignment
} from "./component";


export { ElButton } from "./button";


export interface InstallationOptions {
  locale: any
  i18n: any
  size: string
}

/** The version of element3 */
export const version: string;

/**
 * Install all element3 components into Vue.
 * Please do not invoke this method directly.
 * Call `app.use(ElementUI)` to install.
 */
export function install(app: App, ...options: any[]): any

/** Element3 component common definition */
export type Component = ElementUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = ElementUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ElementUIHorizontalAlignment
