<template>
  <p>pro workflow</p>
  <button class="pro-button" @click="handleClick">
    <slot>按钮</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProButton',
  props: {},
  emits: ['click'],
  setup(props, ctx) {
    const handleClick = evt => {
      console.log('enter')
      ctx.emit('click', evt)
    }

    return {
      handleClick
    }
  }
})
</script>

<!--<style lang="scss">-->
<!--$h: 32px;-->
<!--.pro-button {-->
<!--  box-sizing: border-box;-->
<!--  height: $h;-->
<!--  padding: 0 12px;-->
<!--  cursor: pointer;-->
<!--  display: inline-flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  white-space: nowrap;-->
<!--  background: white;-->
<!--}-->
<!--</style>-->

<style>
.pro-button {
  box-sizing: border-box;
  height: 32px;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
}
</style>
