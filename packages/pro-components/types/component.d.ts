import { App } from 'vue'

/** ProUI component common definition */
export interface ProUIComponent {
  /** Install component into Vue */
  install: (app: App, ...options: any[]) => any
}

/** Component size definition for button */
export type ProUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type ProUIHorizontalAlignment = 'left' | 'center' | 'right'
