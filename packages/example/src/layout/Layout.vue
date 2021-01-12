<template>
  <pro-layout>
    <template #logo="{ collapse }">
      <p>{{ collapse ? 'E' : 'beer-pro' }}</p>
    </template>
    <!-- <template #menu="{ meta }">
        <span>{{ meta.title + meta.icon }}</span>
      </template> -->
    <template #left-header> </template>
    <template #right-header>
      <p>right-header</p>
    </template>
  </pro-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProLayout from 'beer-pro-layout'

export default defineComponent({
  name: 'Layout',
  components: {
    ProLayout
  }
})
</script>
