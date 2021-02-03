/*!
 * pro-components v1.0.0
 * (c) 2021 xhs
 * @license MIT
 */
!(function (e, n) {
  'use strict'
  var o = '1.0.0'
  const t = {
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
  var l = n.defineComponent({
    name: 'ProButton',
    props: t,
    setup(e) {
      const { size: o, disabled: t } = n.toRefs(e),
        l = a(o),
        r = s(t)
      return { buttonDisabled: r, classes: i({ props: e, size: l, disabled: r }) }
    }
  })
  const i = ({ props: e, size: o, disabled: t }) =>
      n.computed(() => [
        o.value ? `pro-button--${o.value}` : '',
        e.type ? `pro-button--${e.type}` : '',
        {
          'is-plain': e.plain,
          'is-round': e.round,
          'is-circle': e.circle,
          'is-loading': e.loading,
          'is-disabled': t.value
        }
      ]),
    s = e =>
      n.computed(() => {
        const o = n.inject('elForm', null)
        return (null == e ? void 0 : e.value) || (null == o ? void 0 : o.disabled)
      }),
    a = e => {
      const o = (function () {
        const e = n.getCurrentInstance()
        if (e) return e.appContext.config.globalProperties.$ELEMENT || {}
        console.warn('useGlobalOptions must be call in setup function')
      })()
      return n.computed(() => (null == e ? void 0 : e.value) || o.size)
    },
    r = { key: 0, class: 'pro-icon-loading' },
    c = { key: 2 }
  ;(l.render = function (e, o, t, l, i, s) {
    return (
      n.openBlock(),
      n.createBlock(
        'button',
        { class: ['pro-button', e.classes], type: e.nativeType, disabled: e.buttonDisabled || e.loading },
        [
          e.loading
            ? (n.openBlock(), n.createBlock('i', r))
            : e.icon
            ? (n.openBlock(), n.createBlock('i', { key: 1, class: e.icon }, null, 2))
            : n.createCommentVNode('v-if', !0),
          e.$slots.default
            ? (n.openBlock(), n.createBlock('span', c, [n.renderSlot(e.$slots, 'default')]))
            : n.createCommentVNode('v-if', !0)
        ],
        10,
        ['type', 'disabled']
      )
    )
  }),
    (l.__file = 'src/components/Button/src/Button.vue'),
    (l.install = function (e) {
      e.component(l.name, l)
    })
  var u = { name: 'ProIcon', props: { name: String } }
  ;(u.render = function (e, o, t, l, i, s) {
    return n.openBlock(), n.createBlock('i', { class: `pro-icon-${t.name}` }, null, 2)
  }),
    (u.__file = 'src/components/Icon/Icon.vue'),
    (u.install = function (e) {
      e.component(u.name, u)
    })
  const d = [l, u],
    p = (e, n = {}) => {
      e.use(
        (function (e = {}) {
          return n => {
            n.config.globalProperties.$ELEMENT = { size: e.size || '', zIndex: e.zIndex || 2e3 }
          }
        })(n)
      ),
        d.forEach(n => {
          e.use(n)
        })
    },
    m = { version: o, install: p }
  ;(e.ProButton = l),
    (e.ProIcon = u),
    (e.default = m),
    (e.install = p),
    (e.version = o),
    Object.defineProperty(e, '__esModule', { value: !0 })
})((this['pro-components'] = this['pro-components'] || {}), Vue)
