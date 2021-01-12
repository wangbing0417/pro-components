<template>
  <div>{{ route.path }}</div>
  <ProDiv></ProDiv>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import ProDiv from 'beer-pro-div'

export default defineComponent({
  name: 'TProButton',
  components: {
    ProDiv
  },
  setup() {
    const route = useRoute()

    return {
      route
    }
  }
})
</script>
