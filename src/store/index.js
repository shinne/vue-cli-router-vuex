import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import rights from './rights'
import scores from './scores'
import loading from './loading'
import errorToast from './errorToast'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    rights,
    scores,
    loading,
    errorToast
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
