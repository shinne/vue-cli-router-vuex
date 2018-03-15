import axios from 'axios'
import store from '../store/index'

export default {
  getUserInfo (params,successFn) {
    axios({
      method: 'get',
      url: '/getUserInfo',
      responseType: 'json',
      params: {
        a: 'a',
        b: 'b'
      }
    })
      .then(function (response) {
        store.commit('test')
        console.log(response)
        successFn(response.data.content)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
