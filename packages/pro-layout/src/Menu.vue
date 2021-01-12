<template>
  <ProScrollBar>
    <BeerMenu :default-active="route.path" @select="handleSelect">
      <ProMenuItem v-for="menu in currentRoutes" :key="menu.path">
        <template #default="item">
          <slot v-bind="item">
            <i v-if="item.meta.icon" :class="item.meta.icon" />
            <span v-if="item.meta.title">{{ item.meta.title }}</span>
          </slot>
        </template>
      </ProMenuItem>
    </BeerMenu>
    <div v-for="menu in currentRoutes" :key="menu.path">{{ menu }}</div>
  </ProScrollBar>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCurrentRoutes } from './composables'
import type { ProRouteRecordRaw } from './types'
import { checkUrl } from './utils'
import ProScrollBar from './ScrollBar.vue'
import BeerMenu from './BeerMenu.vue'
import ProMenuItem from './MenuItem.vue'

export default defineComponent({
  name: 'Menu',
  components: {
    ProScrollBar,
    BeerMenu,
    ProMenuItem
  },
  props: {
    routes: {
      type: Object as PropType<ProRouteRecordRaw[]>
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const currentRoutes = useCurrentRoutes(props.routes as Ref<ProRouteRecordRaw[]>)

    function handleSelect(path: string) {
      if (checkUrl(path)) {
        window.open(path)
      } else {
        router.push(path)
      }
    }

    return {
      route,
      currentRoutes,
      handleSelect
    }
  }
})
</script>

<style scoped></style>
