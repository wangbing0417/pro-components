import { defineComponent as e, openBlock as t, createBlock as n, renderSlot as o, createTextVNode as l } from 'vue'
var a = e({
  name: 'ProButton',
  props: {},
  emits: ['click'],
  setup: (e, t) => ({
    handleClick: e => {
      t.emit('click', e)
    }
  })
})
const c = l('按钮')
;(a.render = function (e, l, a, r, s, i) {
  return (
    t(),
    n('button', { class: 'pro-button', onClick: l[1] || (l[1] = (...t) => e.handleClick && e.handleClick(...t)) }, [
      o(e.$slots, 'default', {}, () => [c])
    ])
  )
}),
  (a.install = e => {
    e.component(a.name, a)
  })
export default a
