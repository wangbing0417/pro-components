<template>
  <div class="pro-button">1</div>
  <ProButton @click="handleClick"></ProButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProButton from 'beer-pro-button'

export default defineComponent({
  name: 'App',
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
