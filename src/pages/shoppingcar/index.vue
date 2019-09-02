<template>
  <div id="shoppingcar">
    <van-button type="info" @click="backHome">返回主页</van-button>
    <shopping-bar v-for="item in goodsList" :key="item.id" :goods="item" ></shopping-bar>
    <div>总价：{{total}}</div>
  </div>
</template>

<script>
import ShoppingBar from '../../components/shoppingcar/shoppingBar'
export default {
  components: {
    ShoppingBar
  },
  data () {
    return {
    }
  },
  computed: {
    goodsList () {
      return this.$store.state.goodsList
    },
    total () {
      return this.$store.getters.total
    }
  },
  methods: {

    backHome () {
      this.$router.push('/')
    }
  },
  created () {

  }
}
</script>

<style>

</style>
