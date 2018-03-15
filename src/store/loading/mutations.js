import * as types from './mutationsType'

const mutations = {
  [types.LOADING_SHOW] (state, {...result}) {
    state.showLoading = true
  },
  [types.LOADING_CLOSE] (state, {...result}) {
    state.showLoading = false
  }
}

export default mutations
