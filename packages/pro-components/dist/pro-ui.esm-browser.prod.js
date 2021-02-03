/*!
 * pro-components v1.0.0
 * (c) 2021 xhs
 * @license MIT
 */
import {
  getCurrentInstance as n,
  defineComponent as e,
  toRefs as o,
  computed as i,
  inject as t,
  openBlock as l,
  createBlock as s,
  createCommentVNode as a,
  renderSlot as r
} from 'vue'
var u = '1.0.0'
var c = e({
  name: 'ProButton',
  props: {
    size: { type: String, validator: n => ['medium', 'small', 'mini', ''].includes(n) },
    type: { type: String, validator: n => ['primary', 'success', 'warning', 'danger', 'info', 'text'].includes(n) },
    nativeType: { type: String, default: 'button' },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String
  },
  setup(n) {
    const { size: e, disabled: i } = o(n),
      t = b(e),
      l = p(i)
    return { buttonDisabled: l, classes: d({ props: n, size: t, disabled: l }) }
  }
})
const d = ({ props: n, size: e, disabled: o }) =>
    i(() => [
      e.value ? `pro-button--${e.value}` : '',
      n.type ? `pro-button--${n.type}` : '',
      {
        'is-plain': n.plain,
        'is-round': n.round,
        'is-circle': n.circle,
        'is-loading': n.loading,
        'is-disabled': o.value
      }
    ]),
  p = n =>
    i(() => {
      const e = t('elForm', null)
      return (null == n ? void 0 : n.value) || (null == e ? void 0 : e.disabled)
    }),
  b = e => {
    const o = (function () {
      const e = n()
      if (e) return e.appContext.config.globalProperties.$ELEMENT || {}
      console.warn('useGlobalOptions must be call in setup function')
    })()
    return i(() => (null == e ? void 0 : e.value) || o.size)
  },
  f = { key: 0, class: 'pro-icon-loading' },
  v = { key: 2 }
;(c.render = function (n, e, o, i, t, u) {
  return (
    l(),
    s(
      'button',
      { class: ['pro-button', n.classes], type: n.nativeType, disabled: n.buttonDisabled || n.loading },
      [
        n.loading ? (l(), s('i', f)) : n.icon ? (l(), s('i', { key: 1, class: n.icon }, null, 2)) : a('v-if', !0),
        n.$slots.default ? (l(), s('span', v, [r(n.$slots, 'default')])) : a('v-if', !0)
      ],
      10,
      ['type', 'disabled']
    )
  )
}),
  (c.__file = 'src/components/Button/src/Button.vue'),
  (c.install = function (n) {
    n.component(c.name, c)
  })
var m = { name: 'ProIcon', props: { name: String } }
;(m.render = function (n, e, o, i, t, a) {
  return l(), s('i', { class: `pro-icon-${o.name}` }, null, 2)
}),
  (m.__file = 'src/components/Icon/Icon.vue'),
  (m.install = function (n) {
    n.component(m.name, m)
  })
const g = [c, m],
  y = (n, e = {}) => {
    n.use(
      (function (n = {}) {
        return e => {
          e.config.globalProperties.$ELEMENT = { size: n.size || '', zIndex: n.zIndex || 2e3 }
        }
      })(e)
    ),
      g.forEach(e => {
        n.use(e)
      })
  },
  z = { version: '1.0.0', install: y }
export default z
export { c as ProButton, m as ProIcon, y as install, u as version }
