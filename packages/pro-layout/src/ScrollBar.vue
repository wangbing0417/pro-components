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
  height: calc(100vh - 64px);
  overflow: auto;
}
</style>
