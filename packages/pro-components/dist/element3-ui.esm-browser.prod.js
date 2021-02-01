/*!
 * pro-components v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
import {
  getCurrentInstance as e,
  defineComponent as n,
  toRefs as l,
  computed as o,
  inject as i,
  openBlock as t,
  createBlock as s,
  createCommentVNode as a,
  renderSlot as r
} from 'vue'
var u = n({
  name: 'ElButton',
  props: {
    size: { type: String, validator: e => ['medium', 'small', 'mini', ''].includes(e) },
    type: { type: String, validator: e => ['primary', 'success', 'warning', 'danger', 'info', 'text'].includes(e) },
    nativeType: { type: String, default: 'button' },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String
  },
  setup(e) {
    const { size: n, disabled: o } = l(e),
      i = p(n),
      t = c(o)
    return { buttonDisabled: t, classes: d({ props: e, size: i, disabled: t }) }
  }
})
const d = ({ props: e, size: n, disabled: l }) =>
    o(() => [
      n.value ? `el-button--${n.value}` : '',
      e.type ? `el-button--${e.type}` : '',
      {
        'is-plain': e.plain,
        'is-round': e.round,
        'is-circle': e.circle,
        'is-loading': e.loading,
        'is-disabled': l.value
      }
    ]),
  c = e =>
    o(() => {
      const n = i('elForm', null)
      return (null == e ? void 0 : e.value) || (null == n ? void 0 : n.disabled)
    }),
  p = n => {
    const l = (function () {
      const n = e()
      if (n) return n.appContext.config.globalProperties.$ELEMENT || {}
      console.warn('useGlobalOptions must be call in setup function')
    })()
    return o(() => {
      const e = i('elFormItem', null)
      return (null == n ? void 0 : n.value) || (null == e ? void 0 : e.elFormItemSize) || l.size
    })
  },
  b = { key: 0, class: 'el-icon-loading' },
  v = { key: 2 }
;(u.render = function (e, n, l, o, i, u) {
  return (
    t(),
    s(
      'button',
      { class: ['el-button', e.classes], type: e.nativeType, disabled: e.buttonDisabled || e.loading },
      [
        e.loading ? (t(), s('i', b)) : e.icon ? (t(), s('i', { key: 1, class: e.icon }, null, 2)) : a('v-if', !0),
        e.$slots.default ? (t(), s('span', v, [r(e.$slots, 'default')])) : a('v-if', !0)
      ],
      10,
      ['type', 'disabled']
    )
  )
}),
  (u.__file = 'src/components/Button/src/Button.vue'),
  (u.install = function (e) {
    e.component(u.name, u)
  })
var f = '1.0.0'
const m = [u],
  g = (e, n = {}) => {
    e.use(
      (function (e = {}) {
        return n => {
          n.config.globalProperties.$ELEMENT = { size: e.size || '', zIndex: e.zIndex || 2e3 }
        }
      })(n)
    ),
      m.forEach(n => {
        e.use(n)
      })
  },
  y = { version: '1.0.0', install: g }
export default y
export { g as install, f as version }
