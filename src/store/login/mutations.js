import * as types from './mutationsType'

const mutations = {
  [types.USER_LOGIN_SUCCESS]( state, {...result}){
    state.loginSuccess = true
    window.token = result.token
  },
  [types.USER_LOGIN_ERROR]( state, {...result}){
    alert('登录失败')
    delete window.token
  }
}

export default mutations
