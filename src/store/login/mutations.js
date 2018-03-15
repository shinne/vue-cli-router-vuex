import * as types from './mutationsType'

const mutations = {
  [types.USER_LOGIN_SUCCESS]( state, {...result}){
    state.loginSuccess = true
    window.token = result.token
  }
}

export default mutations
