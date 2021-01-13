<template>
  <div style="padding: 10px">
    <p>{{ test }}</p>
  </div>
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
