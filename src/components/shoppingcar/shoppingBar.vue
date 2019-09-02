<template>
  <div id="shoppingBar">
    <span>单价:{{goods.single}}</span>
    <shopping-count :count="goods.count" @shopcount="shopCount"></shopping-count>
    <span>总价:{{total}}</span>
    <slot></slot>
  </div>
</template>

<script>
import ShoppingCount from './shoppingCount'
export default {
  props: [
    'goods'
  ],
  components: {
    ShoppingCount
  },
  data () {
    return {
      count: 1
    }
  },
  methods: {
    shopCount (value) {
      this.count = value
      this.$store.commit('changeCount', {
        id: this.goods.id,
        count: this.count
      })
    }
  },
  computed: {
    total () {
      return this.count * this.goods.single
    }
  },
  created () {
  }

}
</script>

<style lang="less" scoped>
  #shoppingBar {
    display: flex;
    height: 100px;
    justify-content: space-around;
    align-items: center;
  }
</style>
