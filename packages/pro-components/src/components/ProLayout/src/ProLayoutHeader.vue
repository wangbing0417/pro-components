<template>
  <header class="pro-header">
    <div class="header-slot">
      <!--      <span-->
      <!--        class="header-fold-btn"-->
      <!--        @click="$emit('toggle-collapse')"-->
      <!--      >-->
      <!--        <i :class="collapse ? 'pro-icon-s-unfold' : 'pro-icon-s-fold'" />-->
      <!--      </span>-->
      <slot name="left" />
      <div class="pro-bell" title="指标注解" @click="$emit('handle-bell')">
        <i class="pro-icon-notebook-2" />
      </div>
    </div>
    <div class="header-slot">
      <div>
        <slot name="right" />
      </div>
      <!--      <div @click="$emit('handleBell')" class="pro-bell" title="指标注解">-->
      <!--        <i class="pro-icon-notebook-2"></i>-->
      <!--      </div>-->
      <div class="pro-avatar" @click="$emit('logout')">
        <img src="https://fe-img-qc.xhscdn.com/559215fe936e5294d1d9af18f29290f664825b84" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProLayoutHeader',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-collapse', 'handle-bell', 'logout']
})
</script>

<!--<style lang="scss">-->
<!--$header-height: 64px;-->
<!--$c-border: #edf2f9;-->
<!--$c-header-background: #ffffff;-->

<!--.pro-header {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--  padding: 0 20px;-->
<!--  height: $header-height;-->
<!--  border-bottom: 1px solid $c-border;-->
<!--  background: $c-header-background;-->
<!--}-->

<!--.pro-header .header-slot {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.pro-header .header-fold-btn {-->
<!--  display: inline-flex;-->
<!--  align-items: center;-->
<!--  width: 32px;-->
<!--  height: 32px;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.pro-bell {-->
<!--  margin-right: 20px;-->
<!--  cursor: pointer;-->
<!--  font-size: 18px;-->
<!--  padding: 10px;-->
<!--  width: 36px;-->
<!--  height: 36px;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->

<!--  &:hover {-->
<!--    color: #3f87f5;-->
<!--    background-color: rgba(63, 135, 245, 0.1);-->
<!--    border-radius: 0.25rem;-->
<!--  }-->
<!--}-->

<!--.pro-avatar img {-->
<!--  width: 40px;-->
<!--  height: 40px;-->
<!--  border-radius: 50%;-->
<!--  margin-right: 10px;-->
<!--  cursor: pointer;-->
<!--}-->
<!--</style>-->
