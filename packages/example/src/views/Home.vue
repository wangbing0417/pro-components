<template>
  <p>{{ home }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const home = ref('Home')

    return {
      home
    }
  }
})
</script>
