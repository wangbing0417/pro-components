import {
  defineComponent as e,
  openBlock as l,
  createBlock as o,
  createVNode as a,
  renderSlot as t,
  computed as s,
  ref as n,
  unref as r,
  onMounted as c,
  onUnmounted as u,
  toRefs as i,
  resolveComponent as p,
  withCtx as d,
  Fragment as h,
  renderList as v,
  toDisplayString as m,
  createCommentVNode as g,
  KeepAlive as f,
  resolveDynamicComponent as y
} from 'vue'
import { useRouter as C, useRoute as w } from 'vue-router'
var k = e({
  name: 'LayoutHeader',
  props: { collapse: { type: Boolean, default: !1 } },
  emits: ['toggle-collapse'],
  setup: (e, { emit: l }) => ({
    toggleCollapse: function () {
      l('toggle-collapse')
    }
  })
})
const S = { class: 'pro-header' },
  z = { class: 'header-slot' },
  B = { class: 'header-slot' }
function L(e) {
  return e.filter(e => {
    var l
    return Array.isArray(e.children) && L(e.children), !(null == (l = e.meta) ? void 0 : l.hidden)
  })
}
function P() {
  const e = n('xl')
  return (
    (function (e) {
      c(() => {
        e(), window.addEventListener('resize', e)
      }),
        u(() => {
          window.removeEventListener('resize', e)
        })
    })(function () {
      const l = document.body.clientWidth
      e.value = l >= 1920 ? 'xl' : l >= 1200 ? 'lg' : l >= 992 ? 'md' : l >= 768 ? 'sm' : 'xs'
    }),
    e
  )
}
function x(e) {
  const l = r(e)
  return s(() => {
    if (l && l.length) return l
    return L(C().options.routes)
  })
}
k.render = function (e, s, n, r, c, u) {
  return (
    l(),
    o('header', S, [
      a('div', z, [
        a(
          'span',
          { class: 'header-fold-btn', onClick: s[1] || (s[1] = (...l) => e.toggleCollapse && e.toggleCollapse(...l)) },
          [a('i', { class: e.collapse ? 'pro-icon-s-unfold' : 'pro-icon-s-fold' }, null, 2)]
        ),
        t(e.$slots, 'left')
      ]),
      a('div', B, [t(e.$slots, 'right')])
    ])
  )
}
var M = { name: 'ScrollBar' }
const $ = { class: 'pro-scrollbar' }
M.render = function (e, a, s, n, r, c) {
  return l(), o('div', $, [t(e.$slots, 'default')])
}
var A = e({
  name: 'Menu',
  components: { ProScrollBar: M },
  props: { routes: { type: Object }, collapse: { type: Boolean, default: !1 } },
  setup(e) {
    const { routes: l } = i(e),
      o = w(),
      a = C(),
      t = x(l),
      s = n(0)
    return (
      c(() => {
        s.value = t.value.findIndex(e => e.path === o.path || e.redirect === o.path)
      }),
      {
        route: o,
        currentRoutes: t,
        handleSelect: function (e, l) {
          ;(s.value = l),
            (function (e) {
              return /^((ht|f)tps?):\/\/?/.test(e)
            })(e)
              ? window.open(e)
              : a.push(e)
        },
        activeIndex: s
      }
    )
  }
})
const b = { class: 'menu-wrap' },
  _ = { key: 0, class: 'menu-item-title' }
A.render = function (e, t, s, n, r, c) {
  const u = p('ProScrollBar')
  return (
    l(),
    o(u, null, {
      default: d(() => [
        a('ul', b, [
          (l(!0),
          o(
            h,
            null,
            v(e.currentRoutes, (t, s) => {
              var n, r, c, u
              return (
                l(),
                o(
                  h,
                  { key: t.path },
                  [
                    (null == (n = t.meta) ? void 0 : n.title) &&
                    '你访问的页面不见了' !== (null == (r = t.meta) ? void 0 : r.title)
                      ? (l(),
                        o(
                          'li',
                          {
                            key: 0,
                            class: {
                              'menu-item': !0,
                              'menu-item-center': e.collapse,
                              'menu-item-active': s === e.activeIndex
                            },
                            onClick: l => e.handleSelect(t.path, s)
                          },
                          [
                            a('i', { class: null == (c = t.meta) ? void 0 : c.icon }, null, 2),
                            e.collapse ? g('', !0) : (l(), o('span', _, m(null == (u = t.meta) ? void 0 : u.title), 1))
                          ],
                          10,
                          ['onClick']
                        ))
                      : g('', !0)
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
var H = {
  name: 'LayoutAside',
  components: { ProMenu: A },
  props: { collapse: { type: Boolean, default: !1 }, routes: { type: Object } },
  emits: ['toggle-collapse'],
  setup(e, { emit: l }) {
    const { collapse: o } = i(e),
      a = P(),
      t = s(() => 'xs' !== a.value && o.value)
    return {
      collapse: o,
      size: a,
      menuCollapse: t,
      toggleCollapse: function () {
        l('toggle-collapse')
      }
    }
  }
}
const R = { class: 'pro-aside-wrapper' },
  T = { class: 'pro-aside-logo' }
H.render = function (e, s, n, r, c, u) {
  const i = p('ProMenu')
  return (
    l(),
    o(
      'aside',
      { class: [r.collapse && 'aside-collapse', 'pro-aside'] },
      [
        a('div', { class: 'mask', onClick: s[1] || (s[1] = (...e) => r.toggleCollapse && r.toggleCollapse(...e)) }),
        a('div', R, [
          a('div', T, [t(e.$slots, 'logo', { collapse: r.menuCollapse })]),
          a(i, { routes: n.routes, collapse: r.menuCollapse }, { default: d(l => [t(e.$slots, 'menu', l)]), _: 1 }, 8, [
            'routes',
            'collapse'
          ])
        ])
      ],
      2
    )
  )
}
const j = { class: 'pro-main' }
const I = {
  render: function (e, t) {
    const s = p('router-view')
    return (
      l(),
      o('main', j, [
        a(s, null, {
          default: d(({ Component: e, route: a }) => {
            var t
            return [
              (null == (t = a.meta) ? void 0 : t.keepAlive)
                ? (l(), o(f, { key: 0 }, [(l(), o(y(e), { key: a.path }))], 1024))
                : (l(), o(y(e), { key: a.path }))
            ]
          }),
          _: 1
        })
      ])
    )
  }
}
var O = e({
  name: 'Layout',
  components: { ProLayoutHeader: k, ProLayoutAside: H, ProLayoutMain: I, ProScrollBar: M },
  props: { title: { type: String, default: 'B端数据报表平台' }, routes: { type: Object } },
  setup() {
    const { show: e, toggleShow: l } = (function (e = !1) {
      const l = n(e)
      return {
        show: l,
        toggleShow: function () {
          l.value = !l.value
        }
      }
    })()
    return { show: e, toggleShow: l }
  }
})
const V = { class: 'pro-layout', style: { display: 'flex' } },
  D = a(
    'svg',
    { viewBox: '0 0 24 24', role: 'img', class: 'pro-logo-img' },
    [
      a('path', {
        d:
          'M16.892 11.588l.001-.005v-.008c0-.005 0-.01.002-.013v-.638a.127.127 0 00-.094-.118.214.214 0 00-.069-.009h-.42c-.02 0-.03 0-.035.005-.005.005-.005.015-.005.036l.005.717v.033a.013.013 0 00.014.013h.569l.02-.004.006-.001a.014.014 0 00.004-.003.013.013 0 00.002-.005z',
        'clip-rule': 'evenodd',
        'fill-rule': 'evenodd'
      }),
      a('path', {
        d:
          'M7 7a5 5 0 000 10h10a5 5 0 000-10H7zm11.698 4.96c.072.1.12.215.139.336a1.2 1.2 0 01.015.22v1.139a.778.778 0 01-.558.755 1.179 1.179 0 01-.235.043c-.083.006-.294.006-.38.006h-.292a.025.025 0 01-.023-.015v-.006c-.055-.12-.322-.729-.323-.743 0-.015.003-.019.015-.019h.698c.126 0 .19-.062.19-.21v-.682a.264.264 0 00-.158-.235.367.367 0 00-.16-.034h-1.329c-.015 0-.019.008-.019.02v1.88c0 .025.002.037-.004.042-.005.005-.017.005-.042.005h-.822c-.025 0-.037 0-.042-.005-.006-.005-.005-.017-.005-.042V12.56c0-.025.001-.036-.004-.041-.005-.005-.016-.004-.04-.004h-.833c-.005 0-.01 0-.016-.002a.033.033 0 01-.02-.022.033.033 0 01-.001-.016v-.83s-.004-.048.034-.048h.85c.035 0 .035-.067.035-.067v-.665s.006-.074-.041-.074h-.523c-.023 0-.035.002-.04-.004-.006-.005-.006-.016-.006-.042v-.852c0-.013.003-.017.016-.017h.575a.013.013 0 00.014-.013v-.312a.016.016 0 01.005-.013c.004-.004.013-.004.013-.004h.875s.016 0 .02.004a.026.026 0 01.006.019v.283c0 .019 0 .028.005.033.004.005.014.005.034.005h.413c.2.003.394.054.57.148.17.091.305.235.384.41.045.097.074.2.088.306.01.075.015.15.014.227v.603c0 .023.002.023.024.023h.103c.177.002.35.045.506.127.11.056.204.138.276.238zM14.5 13.55l.001.005v.887c0 .015-.003.019-.02.019h-3.009c-.02 0-.023 0-.026-.005-.004-.006.004-.02.004-.02l.4-.874a.034.034 0 01.033-.017h.748c.026 0 .038.002.044-.004.005-.005.004-.017.004-.044v-2.663c0-.02 0-.03-.004-.035-.005-.005-.015-.005-.036-.005h-.49c-.023 0-.034 0-.04-.005-.005-.005-.005-.016-.005-.039v-.83c0-.043.005-.042.035-.042h2.013c.025 0 .036-.001.041.004.005.005.004.016.004.039v.831c0 .021 0 .032-.004.037-.005.006-.016.006-.039.006h-.494c-.021 0-.031 0-.036.004-.005.005-.004.015-.004.036v2.68c0 .028 0 .028.028.028h.84l.005.001c.002 0 .003.002.004.003a.014.014 0 01.003.004zM6.888 9.59h.866a.018.018 0 01.018.016v.474c.002.464.004 1.151.004 1.57v1.976a1.1 1.1 0 01-.043.307.696.696 0 01-.341.442.743.743 0 01-.253.076 5.705 5.705 0 01-.538.008.033.033 0 01-.03-.02l-.085-.193a9.274 9.274 0 01-.23-.532c-.002-.027 0-.027.023-.027h.424a.14.14 0 00.15-.09.14.14 0 00.01-.062v-.534c0-.733.003-1.96.004-2.726l.002-.668a.019.019 0 01.019-.018zm4.336 2.838h.498a.015.015 0 01.014.005.015.015 0 01.003.007l-.001.008-.334.736a.014.014 0 01-.013.009h-.949a.596.596 0 01-.194-.032.392.392 0 01-.078-.037.27.27 0 01-.131-.228.293.293 0 01.012-.1 2.3 2.3 0 01.08-.22l.134-.303c.121-.27.273-.611.264-.611h-.338a.573.573 0 01-.19-.033.397.397 0 01-.074-.035.266.266 0 01-.131-.217.322.322 0 01.012-.11c.02-.072.046-.142.076-.21a5.48 5.48 0 01.152-.33l.53-1.19.006-.006a.013.013 0 01.008-.002h.892a.015.015 0 01.012.007.015.015 0 010 .013l-.5 1.126a.085.085 0 00.079.12h.754l.007.002a.015.015 0 01.007.012v.007l-.67 1.51a.072.072 0 00.03.092c.01.006.021.01.033.01zm-1.79.176a.834.834 0 00.088.377c0 .007-.004.014-.016.035l-.165.367c-.116.26-.256.573-.287.637l-.003.006c0 .003-.001.004-.005.005-.005.001-.015-.012-.023-.023a3.002 3.002 0 01-.413-.912 3.54 3.54 0 01-.08-.421 140.685 140.685 0 01-.067-.837l-.015-.198a30.938 30.938 0 01-.022-.288 54.046 54.046 0 00-.042-.54c-.001-.016 0-.02.018-.02h.856c.015 0 .036 0 .036.005a22.29 22.29 0 01.014.165l.011.159a107.627 107.627 0 01.062.789l.013.177.007.1.02.252.005.049c.004.038.008.077.008.116zm-4.048-1.812h.85c.015 0 .017.003.016.02a15.7 15.7 0 00-.007.084l-.006.085a205.5 205.5 0 01-.006.07l-.024.301a31.349 31.349 0 00-.021.288l-.016.198-.015.198-.035.45-.003.041a2.746 2.746 0 01-.096.566 2.96 2.96 0 01-.198.56c-.058.123-.13.24-.213.348a.1.1 0 01-.027.025c-.003 0-.005-.002-.01-.012a42.41 42.41 0 01-.274-.608 30.656 30.656 0 00-.176-.392c-.016-.032-.015-.032-.007-.049l.007-.014a.822.822 0 00.078-.349l.009-.132a18.334 18.334 0 00.012-.148l.011-.138.01-.13.01-.146.01-.118.012-.154c0-.016.002-.032.003-.047a22.317 22.317 0 01.02-.269l.017-.201.01-.134.01-.143a.988.988 0 01.005-.046c0-.004.001-.004.006-.004h.038zm5.001 2.748h.965a.015.015 0 01.018.005.015.015 0 01.003.01.015.015 0 01-.004.009l-.408.885a.014.014 0 01-.013.009H9.814a.706.706 0 01-.283-.071.014.014 0 01-.006-.019l.406-.891a.014.014 0 01.007-.008.014.014 0 01.011 0c.142.046.29.07.438.071zm7.567-2.755h-.005a.01.01 0 01-.007-.007v-.452a.457.457 0 11.842.246.458.458 0 01-.386.213h-.444z',
        'clip-rule': 'evenodd',
        'fill-rule': 'evenodd'
      })
    ],
    -1
  ),
  E = { key: 0, class: 'pro-logo-title' },
  N = { class: 'pro-container is-vertical' }
;(O.render = function (e, s, n, r, c, u) {
  const i = p('ProLayoutAside'),
    v = p('ProLayoutHeader'),
    f = p('ProLayoutMain'),
    y = p('ProScrollBar')
  return (
    l(),
    o('div', V, [
      a(
        i,
        { routes: e.routes, collapse: e.show, onToggleCollapse: e.toggleShow },
        {
          logo: d(({ collapse: a }) => [
            t(e.$slots, 'logo', { collapse: a }),
            e.$slots.logo
              ? g('', !0)
              : (l(), o(h, { key: 0 }, [D, e.show ? g('', !0) : (l(), o('span', E, m(e.title), 1))], 64))
          ]),
          menu: d(l => [t(e.$slots, 'menu', l)]),
          _: 1
        },
        8,
        ['routes', 'collapse', 'onToggleCollapse']
      ),
      a('div', N, [
        a(
          v,
          { onToggleCollapse: e.toggleShow, collapse: e.show },
          { left: d(() => [t(e.$slots, 'left-header')]), right: d(() => [t(e.$slots, 'right-header')]), _: 1 },
          8,
          ['onToggleCollapse', 'collapse']
        ),
        a(y, null, { default: d(() => [a(f)]), _: 1 })
      ])
    ])
  )
}),
  (O.install = e => {
    e.component(O.name, O)
  })
export default O
