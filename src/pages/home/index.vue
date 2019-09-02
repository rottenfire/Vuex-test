<template>
  <div id="home">
    <van-button plain type="primary" @click="goShoppingCar">购物车</van-button>
    <van-button plain type="primary" @click="showShoppingCar = true">打开本页购物车</van-button>
    <van-popup v-model="showShoppingCar" position="top" :style="{ height: '30%' }">
      <div
        v-for="item in goodsList"
        :key="item.id"
      >{{item.title}} 单价：{{item.single}} {{item.count}}个 {{item.single*item.count}}元</div>
      <div>总价{{total}}元</div>
    </van-popup>

  </div>
</template>

<script>
export default {
  computed: {
    goodsList () {
      return this.$store.state.goodsList
    },
    total () {
      return this.$store.getters.total
    }
  },
  data () {
    return {
      showShoppingCar: false
    }
  },
  methods: {
    goShoppingCar () {
      this.$router.push('/shoppingcar')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
