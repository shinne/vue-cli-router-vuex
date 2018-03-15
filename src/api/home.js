import axiosEnc from '../../src/lib/axiosEnc'
import axios from 'axios'
import store from '../store/index'

export default {
  getUserInfo (params, successFn,errorFn) {
    axiosEnc.ajax({
      method: 'get',
      url: '/getUserInfo',
      responseType: 'json',
      params: {
        a: 'a',
        b: 'b'
      },
      success: function (data) {
        successFn(data.content)
      },
      error: function (data) {
        errorFn(data)
      }
    })
  }
}
