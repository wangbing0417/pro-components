/*!
 * pro-components v0.0.1
 * (c) 2021 xhs
 * @license MIT
 */
import {
  getCurrentInstance,
  defineComponent,
  toRefs,
  computed,
  openBlock,
  createBlock,
  createCommentVNode,
  renderSlot,
  createVNode
} from 'vue'

/**
 * get globalOptions $ELEMENT config object
 */

function useGlobalOptions() {
  const instance = getCurrentInstance()

  if (!instance) {
    console.warn('useGlobalOptions must be call in setup function')
    return
  }

  return instance.appContext.config.globalProperties.$ELEMENT || {}
}
function setupGlobalOptions(opts = {}) {
  return app => {
    app.config.globalProperties.$ELEMENT = {
      size: opts.size || '',
      zIndex: opts.zIndex || 2000
    }
  }
}

var version = '0.0.1'

const props = {
  size: {
    type: String,
    validator(val) {
      return ['medium', 'small', 'mini', ''].includes(val)
    }
  },
  type: {
    type: String,
    validator(val) {
      return ['primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val)
    }
  },
  nativeType: {
    type: String,
    default: 'button'
  },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  icon: String
}

var script = defineComponent({
  name: 'ProButton',
  props,

  setup(props) {
    const { size, disabled } = toRefs(props)
    const buttonSize = useButtonSize(size)
    const buttonDisabled = useButtonDisabled(disabled)
    const classes = useClasses({
      props,
      size: buttonSize,
      disabled: buttonDisabled
    })
    return {
      buttonDisabled,
      classes
    }
  }
})

const useClasses = ({ props, size, disabled }) => {
  return computed(() => {
    return [
      size.value ? `pro-button--${size.value}` : '',
      props.type ? `pro-button--${props.type}` : '',
      {
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-loading': props.loading,
        'is-disabled': disabled.value
      }
    ]
  })
}

const useButtonDisabled = disabled => {
  return computed(() => {
    return disabled === null || disabled === void 0 ? void 0 : disabled.value
  })
}

const useButtonSize = size => {
  const globalConfig = useGlobalOptions()
  return computed(() => {
    return (size === null || size === void 0 ? void 0 : size.value) || globalConfig.size
  })
}

const _hoisted_1 = {
  key: 0,
  class: 'pro-icon-loading'
}
const _hoisted_2 = {
  key: 2
}

const _hoisted_3 = /*#__PURE__*/ createVNode(
  'span',
  {
    style: {
      color: 'black'
    }
  },
  '1234',
  -1
  /* HOISTED */
)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      'button',
      {
        class: ['pro-button', _ctx.classes],
        type: _ctx.nativeType,
        disabled: _ctx.buttonDisabled || _ctx.loading
      },
      [
        _ctx.loading
          ? (openBlock(), createBlock('i', _hoisted_1))
          : _ctx.icon
          ? (openBlock(),
            createBlock(
              'i',
              {
                key: 1,
                class: _ctx.icon
              },
              null,
              2
              /* CLASS */
            ))
          : createCommentVNode('v-if', true),
        _ctx.$slots.default
          ? (openBlock(), createBlock('span', _hoisted_2, [renderSlot(_ctx.$slots, 'default')]))
          : createCommentVNode('v-if', true),
        _hoisted_3
      ],
      10,
      /* CLASS, PROPS */
      ['type', 'disabled']
    )
  )
}

script.render = render
script.__file = 'src/components/Button/src/Button.vue'

script.install = function (app) {
  app.component(script.name, script)
}

var script$1 = {
  name: 'ProIcon',
  props: {
    name: String
  }
}

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      'i',
      {
        class: `pro-icon-${$props.name}`
      },
      null,
      2
      /* CLASS */
    )
  )
}

script$1.render = render$1
script$1.__file = 'src/components/Icon/Icon.vue'

script$1.install = function (app) {
  app.component(script$1.name, script$1)
}

const components = [script, script$1]

const install = (app, opts = {}) => {
  app.use(setupGlobalOptions(opts))
  components.forEach(component => {
    app.use(component)
  })
}

const ProComponents = {
  version,
  install
}

export default ProComponents
export { script as ProButton, script$1 as ProIcon, install, version }
