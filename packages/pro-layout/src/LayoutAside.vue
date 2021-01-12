<template>
  <aside :class="collapse && 'aside-collapse'" class="pro-aside">
    <div class="mask" @click="toggleCollapse" />
    <div class="pro-aside-wrapper">
      <div class="pro-aside-logo">
        <slot :collapse="menuCollapse" name="logo" />
      </div>

      <!--      <ProMenu :routes="routes">-->
      <!--        <template #default="item">-->
      <!--          <slot v-bind="item" name="menu" />-->
      <!--        </template>-->
      <!--      </ProMenu>-->
    </div>
  </aside>
</template>

<script lang="ts">
import { toRefs, computed, PropType } from 'vue'
import { useScreenSize } from './composables'
// import ProMenu from '../Menu/Menu.vue'
import type { ProRouteRecordRaw } from './types'

export default {
  name: 'LayoutAside',
  components: {
    // ProMenu
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    },
    routes: {
      type: Object as PropType<ProRouteRecordRaw[]>
    }
  },
  emits: ['toggle-collapse'],
  setup(props) {
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
</script>

<style>
.pro-aside .mask {
  display: none;
}
.pro-aside .pro-aside-wrapper {
  position: relative;
  width: var(--aside-width);
  height: 100%;
  border-right: 1px solid var(--c-border);
  background: var(--c-aside-background);
  transition: width var(--t-duration) var(--t-timing-function);
}
.pro-aside.aside-collapse .pro-aside-wrapper {
  width: 60px;
}
.pro-aside .pro-aside-wrapper .el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
.pro-aside .pro-menu {
  min-height: calc(var(--layout-height) - var(--header-height));
}
.pro-aside .pro-aside-logo {
  padding-left: 20px;
  height: var(--header-height);
  border-bottom: 1px solid var(--c-border);
  background: var(--c-aside-background);
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .pro-aside {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    z-index: var(--z-index-sidebar);
  }
  .pro-aside.aside-collapse {
    width: 100%;
  }
  .pro-aside .mask {
    display: block;
    position: absolute;
    opacity: 0;
    transition: opacity var(--t-duration) var(--t-timing-function);
  }
  .pro-aside.aside-collapse .mask {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--c-mask-background);
    opacity: 1;
  }
  .pro-aside .pro-aside-wrapper {
    transform: translateX(-100%);
    transition: transform var(--t-duration) var(--t-timing-function);
  }
  .pro-aside.aside-collapse .pro-aside-wrapper {
    width: var(--aside-width);
    transform: translateX(0);
  }
}
</style>
