<template>
  <li v-if="hasMultiChild(item)"><slot v-bind="item"></slot></li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { ProRouteRecordRaw } from './types'

export default defineComponent({
  name: 'MenuItem',
  props: {
    item: {
      type: Object as PropType<ProRouteRecordRaw>
    }
  },
  setup(props) {
    function hasMultiChild(item: ProRouteRecordRaw) {
      return item.children ? item.children.length > 1 : false
    }

    return {
      hasMultiChild
    }
  }
})
</script>

<style scoped>
li {
}
</style>
