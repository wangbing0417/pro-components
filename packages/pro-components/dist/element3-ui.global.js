/*!
 * pro-components v1.0.0
 * (c) 2021 kkb
 * @license MIT
 */
var Element3 = (function (exports, vue) {
  'use strict'

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

  /**
   * get globalOptions $ELEMENT config object
   */

  function useGlobalOptions() {
    const instance = vue.getCurrentInstance()

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

  var script = vue.defineComponent({
    name: 'ElButton',
    props,

    setup(props) {
      const { size, disabled } = vue.toRefs(props)
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
    return vue.computed(() => {
      return [
        size.value ? `el-button--${size.value}` : '',
        props.type ? `el-button--${props.type}` : '',
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
    return vue.computed(() => {
      const elForm = vue.inject('elForm', null)
      return (
        (disabled === null || disabled === void 0 ? void 0 : disabled.value) ||
        (elForm === null || elForm === void 0 ? void 0 : elForm.disabled)
      )
    })
  }

  const useButtonSize = size => {
    const globalConfig = useGlobalOptions()
    return vue.computed(() => {
      const elFormItem = vue.inject('elFormItem', null)
      return (
        (size === null || size === void 0 ? void 0 : size.value) ||
        (elFormItem === null || elFormItem === void 0 ? void 0 : elFormItem.elFormItemSize) ||
        globalConfig.size
      )
    })
  }

  const _hoisted_1 = {
    key: 0,
    class: 'el-icon-loading'
  }
  const _hoisted_2 = {
    key: 2
  }
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (
      vue.openBlock(),
      vue.createBlock(
        'button',
        {
          class: ['el-button', _ctx.classes],
          type: _ctx.nativeType,
          disabled: _ctx.buttonDisabled || _ctx.loading
        },
        [
          _ctx.loading
            ? (vue.openBlock(), vue.createBlock('i', _hoisted_1))
            : _ctx.icon
            ? (vue.openBlock(),
              vue.createBlock(
                'i',
                {
                  key: 1,
                  class: _ctx.icon
                },
                null,
                2
                /* CLASS */
              ))
            : vue.createCommentVNode('v-if', true),
          _ctx.$slots.default
            ? (vue.openBlock(), vue.createBlock('span', _hoisted_2, [vue.renderSlot(_ctx.$slots, 'default')]))
            : vue.createCommentVNode('v-if', true)
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

  var version = '1.0.0'

  const components = [script]

  const install = (app, opts = {}) => {
    app.use(setupGlobalOptions(opts))
    components.forEach(component => {
      app.use(component)
    })
  }

  const element3 = {
    version,
    install
  }

  exports.default = element3
  exports.install = install
  exports.version = version

  Object.defineProperty(exports, '__esModule', { value: true })

  return exports
})({}, Vue)
