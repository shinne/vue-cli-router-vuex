import api from '../../api/login'
import * as types from './mutationsType'
const actions = {
  login ({commit}, user) {
    api.login(
      user,
      ({...result}) => { commit(types.USER_LOGIN_SUCCESS, {...result}) },
      ({...result}) => { commit(types.USER_LOGIN_ERROR, {...result}) }
    )
  }
}

export default actions
