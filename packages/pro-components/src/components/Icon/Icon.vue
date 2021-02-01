<template>
  <i :class="`pro-icon-${name}`"></i>
</template>

<script>
export default {
  name: 'ProIcon',
  props: {
    name: String
  }
}
</script>
