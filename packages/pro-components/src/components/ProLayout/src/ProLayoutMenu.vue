<template>
  <!--  <ProScrollBar>-->
  <!--    -->
  <!--  </ProScrollBar>-->

  <ul class="menu-wrap">
    <template v-for="(menu, index) in currentRoutes" :key="menu.path">
      <li
        v-if="menu.meta?.title && menu.meta?.title !== '你访问的页面不见了'"
        :class="{ 'menu-item': true, 'menu-item-center': collapse, 'menu-item-active': index === activeIndex }"
        @click="handleSelect(menu.path, index)"
      >
        <i :class="menu.meta?.icon" />
        <span v-if="!collapse" class="menu-item-title">{{ menu.meta?.title }}</span>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, toRefs, ref } from 'vue'
import type { Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useCurrentRoutes } from '../../../composables'
import { checkUrl } from '../../../utils'
// import ProScrollBar from './ScrollBar.vue'

export default defineComponent({
  name: 'ProLayoutMenu',
  components: {
    // ProScrollBar,
  },
  props: {
    routes: {
      type: Object as PropType<RouteRecordRaw[]>
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
    const currentRoutes = useCurrentRoutes(routes as Ref<RouteRecordRaw[]>)
    const activeIndex = ref(0)

    onMounted(() => {
      activeIndex.value = currentRoutes.value.findIndex(
        item => item.path === route.path || item.redirect === route.path
      )
    })

    function handleSelect(path: string, index: number) {
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
</script>

<!--<style lang="scss">-->
<!--.menu-wrap {-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--  list-style: none;-->
<!--  color: #53535f;-->
<!--  font-size: 14px;-->
<!--}-->

<!--.menu-item {-->
<!--  white-space: nowrap;-->
<!--  cursor: pointer;-->
<!--  padding: 14px 15px;-->
<!--  position: relative;-->
<!--  overflow: hidden;-->
<!--}-->

<!--.menu-item-active {-->
<!--  background-color: rgba(63, 135, 245, 0.15);-->
<!--  color: #3a64ff;-->
<!--  //border-right: 2px solid #3a64ff;-->
<!--}-->

<!--.menu-item:hover {-->
<!--  color: #3a64ff;-->
<!--}-->

<!--.menu-item-center {-->
<!--  text-align: center;-->
<!--}-->

<!--.menu-item-icon {-->
<!--  width: 17px;-->
<!--  height: 17px;-->
<!--}-->

<!--.menu-item-title {-->
<!--  padding: 0 14px;-->
<!--}-->
<!--</style>-->
