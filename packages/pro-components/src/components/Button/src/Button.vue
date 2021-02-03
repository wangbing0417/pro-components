<template>
  <button class="pro-button" :class="classes" :type="nativeType" :disabled="buttonDisabled || loading">
    <i class="pro-icon-loading" v-if="loading"></i>
    <i :class="icon" v-else-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <span style="color: black">1234</span>
  </button>
</template>

<script lang="ts">
import { toRefs, computed, defineComponent, Ref } from 'vue'
import { props } from './props'
import { useGlobalOptions } from '../../../composables/globalConfig'

export default defineComponent({
  name: 'ProButton',
  props,
  setup(props) {
    const { size, disabled } = toRefs(props)
    const buttonSize = useButtonSize(size)
    const buttonDisabled = useButtonDisabled(disabled)
    const classes = useClasses({
      props,
      size: buttonSize,
      disabled: buttonDisabled
    })
    return {
      buttonDisabled,
      classes
    }
  }
})

const useClasses = ({ props, size, disabled }) => {
  return computed(() => {
    return [
      size.value ? `pro-button--${size.value}` : '',
      props.type ? `pro-button--${props.type}` : '',
      {
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-loading': props.loading,
        'is-disabled': disabled.value
      }
    ]
  })
}

const useButtonDisabled = (disabled: Ref) => {
  return computed(() => {
    return disabled?.value
  })
}

const useButtonSize = (size: Ref) => {
  const globalConfig = useGlobalOptions()
  return computed(() => {
    return size?.value || globalConfig.size
  })
}
</script>

<style>
.test {
}
</style>
