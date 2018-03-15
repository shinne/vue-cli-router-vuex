import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  userName: '',
  password: '',
  loginSuccess: false
}

export default {
  state,
  mutations,
  actions,
  getters
}
