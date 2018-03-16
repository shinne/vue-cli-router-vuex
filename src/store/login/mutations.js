import * as types from './mutationsType'

const mutations = {
  [types.USER_LOGIN_SUCCESS]( state, {...result}){
    state.loginSuccess = true
    window.token = result.token
  },
  [types.USER_LOGIN_ERROR]( state, {...result}){
    alert('登录失败')
    delete window.token
  },
  [types.SET_USER_NAME]( state, userName){
    state.userName = userName
  },
  [types.SET_USER_PASSWORD]( state, password){
    state.password = password
  }
}

export default mutations
