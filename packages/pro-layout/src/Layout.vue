<template>
  <div class="pro-layout" style="display: flex">
    <ProLayoutAside :routes="routes" :collapse="show" @toggle-collapse="toggleShow">
      <template #logo="{ collapse }">
        <slot :collapse="collapse" name="logo" />
      </template>

      <template #menu="item">
        <slot v-bind="item" name="menu" />
      </template>
    </ProLayoutAside>
    <div class="pro-container is-vertical">
      <ProLayoutHeader @toggle-collapse="toggleShow">
        <template #left>
          <slot name="left-header" />
        </template>
        <template #right>
          <slot name="right-header" />
        </template>
      </ProLayoutHeader>

      <ProScrollBar><ProLayoutMain /></ProScrollBar>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import ProLayoutHeader from './LayoutHeader.vue'
import ProLayoutAside from './LayoutAside.vue'
import ProLayoutMain from './LayoutMain.vue'
import ProScrollBar from './ScrollBar.vue'
import { useShow } from './composables'
import type { ProRouteRecordRaw } from './types'

export default defineComponent({
  name: 'Layout',
  components: {
    ProLayoutHeader,
    ProLayoutAside,
    ProLayoutMain,
    ProScrollBar
  },
  props: {
    routes: {
      type: Object as PropType<ProRouteRecordRaw[]>
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
</script>

<style>
.pro-layout {
  box-sizing: border-box;
  position: relative;
  height: var(--layout-height);
  overflow: hidden;
}
.pro-layout .pro-container,
.pro-layout .pro-layout-wrapper {
  flex: 1;
}
.pro-layout .pro-container {
  background: var(--c-page-background);
}
.pro-layout .pro-layout-wrapper.el-scrollbar .el-scrollbar__wrap {
  margin-bottom: 0 !important;
  overflow-x: hidden;
}
@media screen and (max-width: 768px) {
  .pro-layout .pro-layout-wrapper.el-scrollbar .el-scrollbar__wrap {
    margin-right: 0 !important;
  }
}
</style>
