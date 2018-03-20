import api from '../../api/rights'
import * as types from './mutationsType'

const actions = {
  getRightsImgs ({state, commit, rootState}, id) {
    api.getRightsImgs(
      id,
      // action 的参数 有state,commit ,rootState
      ({...result}) => {
      // console.log(state)
      // console.log(rootState)
        commit(types.GET_RIGHTS_IMGS, {...result}) }
    )
  }
}

export default actions
