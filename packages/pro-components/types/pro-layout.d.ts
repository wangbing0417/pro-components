import { App } from 'vue'

export interface ProUIComponent {
  install: (app: App, ...options: any[]) => any
}

interface IProLayout extends ProUIComponent {}

export const ProLayout: IProLayout
