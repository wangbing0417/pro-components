/*!
 * pro-components v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
var Element3 = (function (e, n) {
  'use strict'
  const o = {
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
  var t = n.defineComponent({
    name: 'ElButton',
    props: o,
    setup(e) {
      const { size: o, disabled: t } = n.toRefs(e),
        a = s(o),
        r = i(t)
      return { buttonDisabled: r, classes: l({ props: e, size: a, disabled: r }) }
    }
  })
  const l = ({ props: e, size: o, disabled: t }) =>
      n.computed(() => [
        o.value ? `el-button--${o.value}` : '',
        e.type ? `el-button--${e.type}` : '',
        {
          'is-plain': e.plain,
          'is-round': e.round,
          'is-circle': e.circle,
          'is-loading': e.loading,
          'is-disabled': t.value
        }
      ]),
    i = e =>
      n.computed(() => {
        const o = n.inject('elForm', null)
        return (null == e ? void 0 : e.value) || (null == o ? void 0 : o.disabled)
      }),
    s = e => {
      const o = (function () {
        const e = n.getCurrentInstance()
        if (e) return e.appContext.config.globalProperties.$ELEMENT || {}
        console.warn('useGlobalOptions must be call in setup function')
      })()
      return n.computed(() => {
        const t = n.inject('elFormItem', null)
        return (null == e ? void 0 : e.value) || (null == t ? void 0 : t.elFormItemSize) || o.size
      })
    },
    a = { key: 0, class: 'el-icon-loading' },
    r = { key: 2 }
  ;(t.render = function (e, o, t, l, i, s) {
    return (
      n.openBlock(),
      n.createBlock(
        'button',
        { class: ['el-button', e.classes], type: e.nativeType, disabled: e.buttonDisabled || e.loading },
        [
          e.loading
            ? (n.openBlock(), n.createBlock('i', a))
            : e.icon
            ? (n.openBlock(), n.createBlock('i', { key: 1, class: e.icon }, null, 2))
            : n.createCommentVNode('v-if', !0),
          e.$slots.default
            ? (n.openBlock(), n.createBlock('span', r, [n.renderSlot(e.$slots, 'default')]))
            : n.createCommentVNode('v-if', !0)
        ],
        10,
        ['type', 'disabled']
      )
    )
  }),
    (t.__file = 'src/components/Button/src/Button.vue'),
    (t.install = function (e) {
      e.component(t.name, t)
    })
  var c = '1.0.0'
  const u = [t],
    d = (e, n = {}) => {
      e.use(
        (function (e = {}) {
          return n => {
            n.config.globalProperties.$ELEMENT = { size: e.size || '', zIndex: e.zIndex || 2e3 }
          }
        })(n)
      ),
        u.forEach(n => {
          e.use(n)
        })
    },
    p = { version: c, install: d }
  return (e.default = p), (e.install = d), (e.version = c), Object.defineProperty(e, '__esModule', { value: !0 }), e
})({}, Vue)
