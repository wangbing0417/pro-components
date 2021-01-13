<template>
  <div style="padding: 10px">
    <ProButton @click="handleClick"></ProButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProButton from 'beer-pro-button'

export default defineComponent({
  name: 'TProButton',
  components: {
    ProButton
  },
  setup() {
    const handleClick = () => {
      console.log(345)
    }

    return {
      handleClick
    }
  }
})
</script>
