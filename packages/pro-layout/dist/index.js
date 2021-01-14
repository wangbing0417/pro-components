import {
  defineComponent,
  openBlock,
  createBlock,
  createVNode,
  renderSlot,
  computed,
  ref,
  unref,
  onMounted,
  onUnmounted,
  toRefs,
  resolveComponent,
  withCtx,
  Fragment,
  renderList,
  toDisplayString,
  createCommentVNode,
  KeepAlive,
  resolveDynamicComponent
} from 'vue'
import { useRouter, useRoute } from 'vue-router'

var script = defineComponent({
  name: 'LayoutHeader',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-collapse'],
  setup(props, { emit }) {
    function toggleCollapse() {
      emit('toggle-collapse')
    }
    return {
      toggleCollapse
    }
  }
})

const _hoisted_1 = { class: 'pro-header' }
const _hoisted_2 = { class: 'header-slot' }
const _hoisted_3 = { class: 'header-slot' }
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock('header', _hoisted_1, [
      createVNode('div', _hoisted_2, [
        createVNode(
          'span',
          {
            class: 'header-fold-btn',
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.toggleCollapse && _ctx.toggleCollapse(...args))
          },
          [
            createVNode(
              'i',
              {
                class: _ctx.collapse ? 'pro-icon-s-unfold' : 'pro-icon-s-fold'
              },
              null,
              2
            )
          ]
        ),
        renderSlot(_ctx.$slots, 'left')
      ]),
      createVNode('div', _hoisted_3, [renderSlot(_ctx.$slots, 'right')])
    ])
  )
}

script.render = render
script.__file = 'packages/pro-layout/src/LayoutHeader.vue'

function filterRouterByHidden(router) {
  return router.filter(item => {
    var _a
    if (Array.isArray(item.children)) {
      filterRouterByHidden(item.children)
    }
    return !((_a = item.meta) == null ? void 0 : _a.hidden)
  })
}

function checkUrl(url) {
  return /^((ht|f)tps?):\/\/?/.test(url)
}

function useShow(state = false) {
  const show = ref(state)
  function toggleShow() {
    show.value = !show.value
  }
  return {
    show,
    toggleShow
  }
}
function useResize(callback) {
  onMounted(() => {
    callback()
    window.addEventListener('resize', callback)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', callback)
  })
}
function useScreenSize() {
  const size = ref('xl')
  useResize(getScreenSize)
  function getScreenSize() {
    const width = document.body.clientWidth
    if (width >= 1920) {
      size.value = 'xl'
    } else if (width >= 1200) {
      size.value = 'lg'
    } else if (width >= 992) {
      size.value = 'md'
    } else if (width >= 768) {
      size.value = 'sm'
    } else {
      size.value = 'xs'
    }
  }
  return size
}
function useCurrentRoutes(routes) {
  const _routes = unref(routes)
  return computed(() => {
    if (_routes && _routes.length) {
      return _routes
    } else {
      const router = useRouter()
      const _routes2 = router.options.routes
      return filterRouterByHidden(_routes2)
    }
  })
}

var script$1 = {
  name: 'ScrollBar'
}

const _hoisted_1$1 = { class: 'pro-scrollbar' }
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock('div', _hoisted_1$1, [renderSlot(_ctx.$slots, 'default')])
}

script$1.render = render$1
script$1.__file = 'packages/pro-layout/src/ScrollBar.vue'

var script$2 = defineComponent({
  name: 'Menu',
  components: {
    ProScrollBar: script$1
  },
  props: {
    routes: {
      type: Object
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { routes } = toRefs(props)
    const route = useRoute()
    const router = useRouter()
    const currentRoutes = useCurrentRoutes(routes)
    const activeIndex = ref(0)
    onMounted(() => {
      activeIndex.value = currentRoutes.value.findIndex(
        item => item.path === route.path || item.redirect === route.path
      )
    })
    function handleSelect(path, index) {
      activeIndex.value = index
      if (checkUrl(path)) {
        window.open(path)
      } else {
        router.push(path)
      }
    }
    return {
      route,
      currentRoutes,
      handleSelect,
      activeIndex
    }
  }
})

const _hoisted_1$2 = { class: 'menu-wrap' }
const _hoisted_2$1 = {
  key: 0,
  class: 'menu-item-title'
}
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProScrollBar = resolveComponent('ProScrollBar')
  return (
    openBlock(),
    createBlock(_component_ProScrollBar, null, {
      default: withCtx(() => [
        createVNode('ul', _hoisted_1$2, [
          (openBlock(true),
          createBlock(
            Fragment,
            null,
            renderList(_ctx.currentRoutes, (menu, index) => {
              var _a, _b, _c
              return (
                openBlock(),
                createBlock(
                  Fragment,
                  {
                    key: menu.path
                  },
                  [
                    ((_a = menu.meta) == null ? void 0 : _a.title)
                      ? (openBlock(),
                        createBlock(
                          'li',
                          {
                            key: 0,
                            class: {
                              'menu-item': true,
                              'menu-item-center': _ctx.collapse,
                              'menu-item-active': index === _ctx.activeIndex
                            },
                            onClick: $event => _ctx.handleSelect(menu.path, index)
                          },
                          [
                            createVNode(
                              'i',
                              {
                                class: (_b = menu.meta) == null ? void 0 : _b.icon
                              },
                              null,
                              2
                            ),
                            !_ctx.collapse
                              ? (openBlock(),
                                createBlock(
                                  'span',
                                  _hoisted_2$1,
                                  toDisplayString((_c = menu.meta) == null ? void 0 : _c.title),
                                  1
                                ))
                              : createCommentVNode('v-if', true)
                          ],
                          10,
                          ['onClick']
                        ))
                      : createCommentVNode('v-if', true)
                  ],
                  64
                )
              )
            }),
            128
          ))
        ])
      ]),
      _: 1
    })
  )
}

script$2.render = render$2
script$2.__file = 'packages/pro-layout/src/Menu.vue'

var script$3 = {
  name: 'LayoutAside',
  components: {
    ProMenu: script$2
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    },
    routes: {
      type: Object
    }
  },
  emits: ['toggle-collapse'],
  setup(props, { emit }) {
    const { collapse } = toRefs(props)
    const size = useScreenSize()
    const menuCollapse = computed(() => {
      return size.value === 'xs' ? false : collapse.value
    })
    function toggleCollapse() {
      emit('toggle-collapse')
    }
    return {
      collapse,
      size,
      menuCollapse,
      toggleCollapse
    }
  }
}

const _hoisted_1$3 = { class: 'pro-aside-wrapper' }
const _hoisted_2$2 = { class: 'pro-aside-logo' }
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProMenu = resolveComponent('ProMenu')
  return (
    openBlock(),
    createBlock(
      'aside',
      {
        class: [$setup.collapse && 'aside-collapse', 'pro-aside']
      },
      [
        createVNode('div', {
          class: 'mask',
          onClick: _cache[1] || (_cache[1] = (...args) => $setup.toggleCollapse && $setup.toggleCollapse(...args))
        }),
        createVNode('div', _hoisted_1$3, [
          createVNode('div', _hoisted_2$2, [renderSlot(_ctx.$slots, 'logo', { collapse: $setup.menuCollapse })]),
          createVNode(
            _component_ProMenu,
            {
              routes: $props.routes,
              collapse: $setup.menuCollapse
            },
            {
              default: withCtx(item => [renderSlot(_ctx.$slots, 'menu', item)]),
              _: 1
            },
            8,
            ['routes', 'collapse']
          )
        ])
      ],
      2
    )
  )
}

script$3.render = render$3
script$3.__file = 'packages/pro-layout/src/LayoutAside.vue'

const _hoisted_1$4 = { class: 'pro-main' }
function render$4(_ctx, _cache) {
  const _component_router_view = resolveComponent('router-view')
  return (
    openBlock(),
    createBlock('main', _hoisted_1$4, [
      createVNode(_component_router_view, null, {
        default: withCtx(({ Component, route }) => {
          var _a
          return [
            createCommentVNode(' <transition name="transition-main" mode="out-in"> '),
            ((_a = route.meta) == null ? void 0 : _a.keepAlive)
              ? (openBlock(),
                createBlock(
                  KeepAlive,
                  { key: 0 },
                  [
                    (openBlock(),
                    createBlock(resolveDynamicComponent(Component), {
                      key: route.path
                    }))
                  ],
                  1024
                ))
              : (openBlock(),
                createBlock(resolveDynamicComponent(Component), {
                  key: route.path
                })),
            createCommentVNode(' </transition> ')
          ]
        }),
        _: 1
      })
    ])
  )
}

const script$4 = {}

script$4.render = render$4
script$4.__file = 'packages/pro-layout/src/LayoutMain.vue'

var script$5 = defineComponent({
  name: 'Layout',
  components: {
    ProLayoutHeader: script,
    ProLayoutAside: script$3,
    ProLayoutMain: script$4,
    ProScrollBar: script$1
  },
  props: {
    title: {
      type: String,
      default: 'B\u7AEF\u6570\u636E\u62A5\u8868\u5E73\u53F0'
    },
    routes: {
      type: Object
    }
  },
  setup() {
    const { show, toggleShow } = useShow()
    return {
      show,
      toggleShow
    }
  }
})

const _hoisted_1$5 = {
  class: 'pro-layout',
  style: { display: 'flex' }
}
const _hoisted_2$3 = /* @__PURE__ */ createVNode(
  'svg',
  {
    viewBox: '0 0 24 24',
    role: 'img',
    class: 'pro-logo-img'
  },
  [
    /* @__PURE__ */ createVNode('path', {
      d:
        'M16.892 11.588l.001-.005v-.008c0-.005 0-.01.002-.013v-.638a.127.127 0 00-.094-.118.214.214 0 00-.069-.009h-.42c-.02 0-.03 0-.035.005-.005.005-.005.015-.005.036l.005.717v.033a.013.013 0 00.014.013h.569l.02-.004.006-.001a.014.014 0 00.004-.003.013.013 0 00.002-.005z',
      'clip-rule': 'evenodd',
      'fill-rule': 'evenodd'
    }),
    /* @__PURE__ */ createVNode('path', {
      d:
        'M7 7a5 5 0 000 10h10a5 5 0 000-10H7zm11.698 4.96c.072.1.12.215.139.336a1.2 1.2 0 01.015.22v1.139a.778.778 0 01-.558.755 1.179 1.179 0 01-.235.043c-.083.006-.294.006-.38.006h-.292a.025.025 0 01-.023-.015v-.006c-.055-.12-.322-.729-.323-.743 0-.015.003-.019.015-.019h.698c.126 0 .19-.062.19-.21v-.682a.264.264 0 00-.158-.235.367.367 0 00-.16-.034h-1.329c-.015 0-.019.008-.019.02v1.88c0 .025.002.037-.004.042-.005.005-.017.005-.042.005h-.822c-.025 0-.037 0-.042-.005-.006-.005-.005-.017-.005-.042V12.56c0-.025.001-.036-.004-.041-.005-.005-.016-.004-.04-.004h-.833c-.005 0-.01 0-.016-.002a.033.033 0 01-.02-.022.033.033 0 01-.001-.016v-.83s-.004-.048.034-.048h.85c.035 0 .035-.067.035-.067v-.665s.006-.074-.041-.074h-.523c-.023 0-.035.002-.04-.004-.006-.005-.006-.016-.006-.042v-.852c0-.013.003-.017.016-.017h.575a.013.013 0 00.014-.013v-.312a.016.016 0 01.005-.013c.004-.004.013-.004.013-.004h.875s.016 0 .02.004a.026.026 0 01.006.019v.283c0 .019 0 .028.005.033.004.005.014.005.034.005h.413c.2.003.394.054.57.148.17.091.305.235.384.41.045.097.074.2.088.306.01.075.015.15.014.227v.603c0 .023.002.023.024.023h.103c.177.002.35.045.506.127.11.056.204.138.276.238zM14.5 13.55l.001.005v.887c0 .015-.003.019-.02.019h-3.009c-.02 0-.023 0-.026-.005-.004-.006.004-.02.004-.02l.4-.874a.034.034 0 01.033-.017h.748c.026 0 .038.002.044-.004.005-.005.004-.017.004-.044v-2.663c0-.02 0-.03-.004-.035-.005-.005-.015-.005-.036-.005h-.49c-.023 0-.034 0-.04-.005-.005-.005-.005-.016-.005-.039v-.83c0-.043.005-.042.035-.042h2.013c.025 0 .036-.001.041.004.005.005.004.016.004.039v.831c0 .021 0 .032-.004.037-.005.006-.016.006-.039.006h-.494c-.021 0-.031 0-.036.004-.005.005-.004.015-.004.036v2.68c0 .028 0 .028.028.028h.84l.005.001c.002 0 .003.002.004.003a.014.014 0 01.003.004zM6.888 9.59h.866a.018.018 0 01.018.016v.474c.002.464.004 1.151.004 1.57v1.976a1.1 1.1 0 01-.043.307.696.696 0 01-.341.442.743.743 0 01-.253.076 5.705 5.705 0 01-.538.008.033.033 0 01-.03-.02l-.085-.193a9.274 9.274 0 01-.23-.532c-.002-.027 0-.027.023-.027h.424a.14.14 0 00.15-.09.14.14 0 00.01-.062v-.534c0-.733.003-1.96.004-2.726l.002-.668a.019.019 0 01.019-.018zm4.336 2.838h.498a.015.015 0 01.014.005.015.015 0 01.003.007l-.001.008-.334.736a.014.014 0 01-.013.009h-.949a.596.596 0 01-.194-.032.392.392 0 01-.078-.037.27.27 0 01-.131-.228.293.293 0 01.012-.1 2.3 2.3 0 01.08-.22l.134-.303c.121-.27.273-.611.264-.611h-.338a.573.573 0 01-.19-.033.397.397 0 01-.074-.035.266.266 0 01-.131-.217.322.322 0 01.012-.11c.02-.072.046-.142.076-.21a5.48 5.48 0 01.152-.33l.53-1.19.006-.006a.013.013 0 01.008-.002h.892a.015.015 0 01.012.007.015.015 0 010 .013l-.5 1.126a.085.085 0 00.079.12h.754l.007.002a.015.015 0 01.007.012v.007l-.67 1.51a.072.072 0 00.03.092c.01.006.021.01.033.01zm-1.79.176a.834.834 0 00.088.377c0 .007-.004.014-.016.035l-.165.367c-.116.26-.256.573-.287.637l-.003.006c0 .003-.001.004-.005.005-.005.001-.015-.012-.023-.023a3.002 3.002 0 01-.413-.912 3.54 3.54 0 01-.08-.421 140.685 140.685 0 01-.067-.837l-.015-.198a30.938 30.938 0 01-.022-.288 54.046 54.046 0 00-.042-.54c-.001-.016 0-.02.018-.02h.856c.015 0 .036 0 .036.005a22.29 22.29 0 01.014.165l.011.159a107.627 107.627 0 01.062.789l.013.177.007.1.02.252.005.049c.004.038.008.077.008.116zm-4.048-1.812h.85c.015 0 .017.003.016.02a15.7 15.7 0 00-.007.084l-.006.085a205.5 205.5 0 01-.006.07l-.024.301a31.349 31.349 0 00-.021.288l-.016.198-.015.198-.035.45-.003.041a2.746 2.746 0 01-.096.566 2.96 2.96 0 01-.198.56c-.058.123-.13.24-.213.348a.1.1 0 01-.027.025c-.003 0-.005-.002-.01-.012a42.41 42.41 0 01-.274-.608 30.656 30.656 0 00-.176-.392c-.016-.032-.015-.032-.007-.049l.007-.014a.822.822 0 00.078-.349l.009-.132a18.334 18.334 0 00.012-.148l.011-.138.01-.13.01-.146.01-.118.012-.154c0-.016.002-.032.003-.047a22.317 22.317 0 01.02-.269l.017-.201.01-.134.01-.143a.988.988 0 01.005-.046c0-.004.001-.004.006-.004h.038zm5.001 2.748h.965a.015.015 0 01.018.005.015.015 0 01.003.01.015.015 0 01-.004.009l-.408.885a.014.014 0 01-.013.009H9.814a.706.706 0 01-.283-.071.014.014 0 01-.006-.019l.406-.891a.014.014 0 01.007-.008.014.014 0 01.011 0c.142.046.29.07.438.071zm7.567-2.755h-.005a.01.01 0 01-.007-.007v-.452a.457.457 0 11.842.246.458.458 0 01-.386.213h-.444z',
      'clip-rule': 'evenodd',
      'fill-rule': 'evenodd'
    })
  ],
  -1
)
const _hoisted_3$1 = {
  key: 0,
  class: 'pro-logo-title'
}
const _hoisted_4 = { class: 'pro-container is-vertical' }
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProLayoutAside = resolveComponent('ProLayoutAside')
  const _component_ProLayoutHeader = resolveComponent('ProLayoutHeader')
  const _component_ProLayoutMain = resolveComponent('ProLayoutMain')
  const _component_ProScrollBar = resolveComponent('ProScrollBar')
  return (
    openBlock(),
    createBlock('div', _hoisted_1$5, [
      createVNode(
        _component_ProLayoutAside,
        {
          routes: _ctx.routes,
          collapse: _ctx.show,
          onToggleCollapse: _ctx.toggleShow
        },
        {
          logo: withCtx(({ collapse }) => [
            renderSlot(_ctx.$slots, 'logo', { collapse }),
            !_ctx.$slots.logo
              ? (openBlock(),
                createBlock(
                  Fragment,
                  { key: 0 },
                  [
                    _hoisted_2$3,
                    !_ctx.show
                      ? (openBlock(), createBlock('span', _hoisted_3$1, toDisplayString(_ctx.title), 1))
                      : createCommentVNode('v-if', true)
                  ],
                  64
                ))
              : createCommentVNode('v-if', true)
          ]),
          menu: withCtx(item => [renderSlot(_ctx.$slots, 'menu', item)]),
          _: 1
        },
        8,
        ['routes', 'collapse', 'onToggleCollapse']
      ),
      createVNode('div', _hoisted_4, [
        createVNode(
          _component_ProLayoutHeader,
          {
            onToggleCollapse: _ctx.toggleShow,
            collapse: _ctx.show
          },
          {
            left: withCtx(() => [renderSlot(_ctx.$slots, 'left-header')]),
            right: withCtx(() => [renderSlot(_ctx.$slots, 'right-header')]),
            _: 1
          },
          8,
          ['onToggleCollapse', 'collapse']
        ),
        createVNode(_component_ProScrollBar, null, {
          default: withCtx(() => [createVNode(_component_ProLayoutMain)]),
          _: 1
        })
      ])
    ])
  )
}

script$5.render = render$5
script$5.__file = 'packages/pro-layout/src/Layout.vue'

script$5.install = app => {
  app.component(script$5.name, script$5)
}

export default script$5
