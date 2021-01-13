<template>
  <aside :class="collapse && 'aside-collapse'" class="pro-aside">
    <div class="mask" @click="toggleCollapse" />
    <div class="pro-aside-wrapper">
      <div class="pro-aside-logo">
        <slot :collapse="menuCollapse" name="logo" />
      </div>

      <ProMenu :routes="routes" :collapse="menuCollapse">
        <template #default="item">
          <slot v-bind="item" name="menu" />
        </template>
      </ProMenu>
    </div>
  </aside>
</template>

<script lang="ts">
import { toRefs, computed, PropType } from 'vue'
import { useScreenSize } from './composables'
import ProMenu from './Menu.vue'
import type { ProRouteRecordRaw } from './types'

export default {
  name: 'LayoutAside',
  components: {
    ProMenu
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
</script>

<style lang="scss">
.pro-aside .mask {
  display: none;
}
.pro-aside .pro-aside-wrapper {
  box-sizing: border-box;
  position: relative;
  width: var(--aside-width);
  //height: calc(100vh - 64px);
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
  border-bottom: 1px solid var(--c-border);
  background: var(--c-aside-background);
  overflow: hidden;
  cursor: pointer;
}
</style>
