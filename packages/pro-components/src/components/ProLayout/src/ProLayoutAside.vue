<template>
  <aside :class="collapse && 'aside-collapse'" class="pro-aside">
    <div class="mask" @click="toggleCollapse" />
    <div class="pro-aside-wrapper">
      <div class="pro-aside-logo">
        <slot :collapse="menuCollapse" name="logo" />
      </div>

      <ProLayoutMenu :routes="routes" :collapse="menuCollapse">
        <template #default="item">
          <slot v-bind="item" name="menu" />
        </template>
      </ProLayoutMenu>
    </div>
  </aside>
</template>

<script lang="ts">
import { computed, PropType } from 'vue'
import { useScreenSize } from '../../../composables'
import ProLayoutMenu from './ProLayoutMenu.vue'
import type { RouteRecordRaw } from 'vue-router'

export default {
  name: 'ProLayoutAside',
  components: {
    ProLayoutMenu
  },
  props: {
    collapse: {
      type: Boolean,
      default: true
    },
    routes: {
      type: Object as PropType<RouteRecordRaw[]>
    }
  },
  emits: ['toggle-collapse'],
  setup(props, { emit }) {
    const size = useScreenSize()

    const menuCollapse = computed(() => (size.value === 'xs' ? false : props.collapse))

    function toggleCollapse() {
      emit('toggle-collapse')
    }

    return {
      size,
      menuCollapse,
      toggleCollapse
    }
  }
}
</script>

<!--<style lang="scss">-->
<!--$aside-width: 208px;-->
<!--$c-aside-background: #ffffff;-->
<!--$c-border: #edf2f9;-->
<!--$t-duration: 0.3s;-->
<!--$t-timing-function: ease-out;-->
<!--$layout-height: 100vh;-->
<!--$header-height: 64px;-->

<!--.pro-aside {-->
<!--  min-height: 100vh;-->
<!--  border-right: 1px solid $c-border;-->
<!--}-->

<!--.pro-aside .mask {-->
<!--  display: none;-->
<!--}-->

<!--.pro-aside .pro-aside-wrapper {-->
<!--  box-sizing: border-box;-->
<!--  position: relative;-->
<!--  width: $aside-width;-->
<!--  background: $c-aside-background;-->
<!--  transition: width $t-duration t-timing-function;-->
<!--}-->

<!--.pro-aside.aside-collapse .pro-aside-wrapper {-->
<!--  width: 60px;-->
<!--}-->

<!--.pro-aside .pro-aside-wrapper .el-scrollbar .el-scrollbar__wrap {-->
<!--  overflow-x: hidden;-->
<!--}-->

<!--.pro-aside .pro-menu {-->
<!--  min-height: calc(100vh - 64px);-->
<!--}-->

<!--.pro-aside .pro-aside-logo {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--  height: $header-height;-->
<!--  border-bottom: 1px solid $c-border;-->
<!--  background: $c-aside-background;-->
<!--  overflow: hidden;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.pro-aside-wrapper {-->
<!--  //height: 100vh;-->
<!--}-->
<!--</style>-->
