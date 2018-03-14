import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import rights from './rights'
import scores from './scores'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    rights,
    scores
  },
  state: {
    userName: 'youtingting'
  },
  mutations: {
    test: function () {
      console.log('我是一个公共用的commit')
    }
  }
})
