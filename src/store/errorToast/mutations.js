import * as types from './mutationsType'

const mutations = {
  [types.TOAST_SHOW] (state, {...result}) {
    state.showErrorToast = true
  },
  [types.TOAST_CLOSE] (state, {...result}) {
    state.showErrorToast = false
  }
}

export default mutations
