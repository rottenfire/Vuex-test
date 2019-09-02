import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList: [
      {
        id: 1,
        title: '电脑',
        count: 1,
        single: 7688
      },
      {
        id: 2,
        title: '手机',
        count: 1,
        single: 5998
      }
    ]
  },
  getters: {
    total (state) {
      return state.goodsList.reduce((sum, item) => {
        return sum + item.count * item.single
      }, 0)
    }
  },
  mutations: {
    changeCount (state, payload) {
      console.log(payload.id, payload.count)
      state.goodsList.map(item => {
        if (item.id === payload.id) {
          item.count = payload.count
        }
      })
    }
  },
  actions: {

  }
})
