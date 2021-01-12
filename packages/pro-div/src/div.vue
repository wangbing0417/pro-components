<template>
  <div>test</div>
  <NewBsBox></NewBsBox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NewBsBox } from '@xhs/yam-beer'

export default defineComponent({
  name: 'ProDiv',
  components: {
    NewBsBox
  }
})
</script>

<style scoped></style>
