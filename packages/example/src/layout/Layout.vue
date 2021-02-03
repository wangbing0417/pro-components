<template>
  <pro-layout>
    <!-- <template #logo="{ collapse }">
      <p>{{ collapse ? 'A' : 'Ark' }}</p>
    </template> -->
    <!-- <template #menu="{ meta }">
        <span>{{ meta.title + meta.icon }}</span>
      </template> -->
    <template #left-header>
      <p>Home / home</p>
    </template>
    <template #right-header>
      <p>right-header</p>
    </template>
  </pro-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ProLayout } from 'pro-components'

export default defineComponent({
  name: 'Layout',
  components: {
    ProLayout
  }
})
</script>
