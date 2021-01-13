<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'BeerMenu',
  props: {
    defaultActive: {
      type: String,
      default: ''
    }
  },
  emits: ['select']
})
</script>

<style scoped></style>
