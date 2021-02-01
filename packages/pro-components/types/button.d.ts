import { ProUIComponent, ProUIComponentSize } from './component'

/** Button type */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'

/** Same as native button's type */
export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu'

interface IButton extends ProUIComponent {
  /** Button size */
  size: ProUIComponentSize

  /** Button type */
  type: ButtonType

  /** Determine whether it's a plain button */
  plain: boolean

  /** Determine whether it's a round button */
  round: boolean

  /** Determine whether it's loading */
  loading: boolean

  /** Disable the button */
  disabled: boolean

  /** Button Icon, accepts an Icon name of Element Icon component */
  icon: string

  /** Same as native button's autofocus */
  autofocus: boolean

  /** Same as native button's type */
  nativeType: ButtonNativeType
}

/** Button Component */
export const ProButton: IButton
