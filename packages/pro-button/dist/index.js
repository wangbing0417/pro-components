import { defineComponent, openBlock, createBlock, renderSlot, createTextVNode } from 'vue'

var script = defineComponent({
  name: 'ProButton',
  props: {},
  emits: ['click'],
  setup(props, ctx) {
    const handleClick = evt => {
      ctx.emit('click', evt)
    }
    return {
      handleClick
    }
  }
})

const _hoisted_1 = /* @__PURE__ */ createTextVNode('\u6309\u94AE')
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      'button',
      {
        class: 'pro-button',
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      },
      [renderSlot(_ctx.$slots, 'default', {}, () => [_hoisted_1])]
    )
  )
}

script.render = render
script.__file = 'packages/pro-button/src/button.vue'

script.install = app => {
  app.component(script.name, script)
}

export default script
