/*!
 * pro-components v1.0.0
 * (c) 2021 xhs
 * @license MIT
 */
'use strict'
Object.defineProperty(exports, '__esModule', { value: !0 })
var e = require('vue')
const n = {
  size: { type: String, validator: e => ['medium', 'small', 'mini', ''].includes(e) },
  type: { type: String, validator: e => ['primary', 'success', 'warning', 'danger', 'info', 'text'].includes(e) },
  nativeType: { type: String, default: 'button' },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  icon: String
}
var o = e.defineComponent({
  name: 'ProButton',
  props: n,
  setup(n) {
    const { size: o, disabled: s } = e.toRefs(n),
      r = i(o),
      a = l(s)
    return { buttonDisabled: a, classes: t({ props: n, size: r, disabled: a }) }
  }
})
const t = ({ props: n, size: o, disabled: t }) =>
    e.computed(() => [
      o.value ? `pro-button--${o.value}` : '',
      n.type ? `pro-button--${n.type}` : '',
      {
        'is-plain': n.plain,
        'is-round': n.round,
        'is-circle': n.circle,
        'is-loading': n.loading,
        'is-disabled': t.value
      }
    ]),
  l = n =>
    e.computed(() => {
      const o = e.inject('elForm', null)
      return (null == n ? void 0 : n.value) || (null == o ? void 0 : o.disabled)
    }),
  i = n => {
    const o = (function () {
      const n = e.getCurrentInstance()
      if (n) return n.appContext.config.globalProperties.$ELEMENT || {}
      console.warn('useGlobalOptions must be call in setup function')
    })()
    return e.computed(() => (null == n ? void 0 : n.value) || o.size)
  },
  s = { key: 0, class: 'pro-icon-loading' },
  r = { key: 2 }
;(o.render = function (n, o, t, l, i, a) {
  return (
    e.openBlock(),
    e.createBlock(
      'button',
      { class: ['pro-button', n.classes], type: n.nativeType, disabled: n.buttonDisabled || n.loading },
      [
        n.loading
          ? (e.openBlock(), e.createBlock('i', s))
          : n.icon
          ? (e.openBlock(), e.createBlock('i', { key: 1, class: n.icon }, null, 2))
          : e.createCommentVNode('v-if', !0),
        n.$slots.default
          ? (e.openBlock(), e.createBlock('span', r, [e.renderSlot(n.$slots, 'default')]))
          : e.createCommentVNode('v-if', !0)
      ],
      10,
      ['type', 'disabled']
    )
  )
}),
  (o.__file = 'src/components/Button/src/Button.vue'),
  (o.install = function (e) {
    e.component(o.name, o)
  })
var a = { name: 'ProIcon', props: { name: String } }
;(a.render = function (n, o, t, l, i, s) {
  return e.openBlock(), e.createBlock('i', { class: `pro-icon-${t.name}` }, null, 2)
}),
  (a.__file = 'src/components/Icon/Icon.vue'),
  (a.install = function (e) {
    e.component(a.name, a)
  })
const c = [o, a],
  u = (e, n = {}) => {
    e.use(
      (function (e = {}) {
        return n => {
          n.config.globalProperties.$ELEMENT = { size: e.size || '', zIndex: e.zIndex || 2e3 }
        }
      })(n)
    ),
      c.forEach(n => {
        e.use(n)
      })
  },
  p = { version: '1.0.0', install: u }
;(exports.ProButton = o),
  (exports.ProIcon = a),
  (exports.default = p),
  (exports.install = u),
  (exports.version = '1.0.0')
