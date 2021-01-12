<template>
  <p>{{ test }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const test = ref('Test')

    return {
      test
    }
  }
})
</script>
