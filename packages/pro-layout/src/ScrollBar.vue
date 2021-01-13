<template>
  <div class="pro-scrollbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ScrollBar'
}
</script>

<style lang="scss">
.pro-scrollbar {
  height: 100%;
  overflow: auto;
}
</style>
