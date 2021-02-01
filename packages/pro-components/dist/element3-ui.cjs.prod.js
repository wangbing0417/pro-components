/*!
 * pro-components v1.0.0
 * (c) 2021 kkb
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
  name: 'ElButton',
  props: n,
  setup(n) {
    const { size: o, disabled: s } = e.toRefs(n),
      a = i(o),
      r = l(s)
    return { buttonDisabled: r, classes: t({ props: n, size: a, disabled: r }) }
  }
})
const t = ({ props: n, size: o, disabled: t }) =>
    e.computed(() => [
      o.value ? `el-button--${o.value}` : '',
      n.type ? `el-button--${n.type}` : '',
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
    return e.computed(() => {
      const t = e.inject('elFormItem', null)
      return (null == n ? void 0 : n.value) || (null == t ? void 0 : t.elFormItemSize) || o.size
    })
  },
  s = { key: 0, class: 'el-icon-loading' },
  a = { key: 2 }
;(o.render = function (n, o, t, l, i, r) {
  return (
    e.openBlock(),
    e.createBlock(
      'button',
      { class: ['el-button', n.classes], type: n.nativeType, disabled: n.buttonDisabled || n.loading },
      [
        n.loading
          ? (e.openBlock(), e.createBlock('i', s))
          : n.icon
          ? (e.openBlock(), e.createBlock('i', { key: 1, class: n.icon }, null, 2))
          : e.createCommentVNode('v-if', !0),
        n.$slots.default
          ? (e.openBlock(), e.createBlock('span', a, [e.renderSlot(n.$slots, 'default')]))
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
const r = [o],
  c = (e, n = {}) => {
    e.use(
      (function (e = {}) {
        return n => {
          n.config.globalProperties.$ELEMENT = { size: e.size || '', zIndex: e.zIndex || 2e3 }
        }
      })(n)
    ),
      r.forEach(n => {
        e.use(n)
      })
  },
  u = { version: '1.0.0', install: c }
;(exports.default = u), (exports.install = c), (exports.version = '1.0.0')
