<template>
  <header class="pro-header">
    <div class="header-slot">
      <span class="header-fold-btn" @click="toggleCollapse">
        <i :class="collapse ? 'pro-icon-s-unfold' : 'pro-icon-s-fold'"></i>
      </span>
      <slot name="left" />
    </div>
    <div class="header-slot">
      <slot name="right" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutHeader',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-collapse'],
  setup(props, { emit }) {
    function toggleCollapse() {
      emit('toggle-collapse')
    }

    return {
      toggleCollapse
    }
  }
})
</script>

<style lang="scss">
.pro-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: var(--header-height);
  border-bottom: 1px solid var(--c-border);
  //background: #886cff;
  background: var(--c-header-background);
}
.pro-header .header-slot {
  display: flex;
  align-items: center;
}
.pro-header .header-fold-btn {
  display: inline-flex;
  align-items: center;
  //margin-right: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
