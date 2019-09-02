<template>
  <div>
    <van-stepper v-model="value" @change="changeCount"/>
  </div>
</template>

<script>
export default {
  props: [
    'count'
  ],
  data () {
    return {
      value: this.count
    }
  },
  methods: {
    changeCount (value) {
      this.$emit('shopcount', this.value)
    }
  }
}
</script>

<style>
</style>
