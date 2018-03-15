import axiosEnc from '../lib/axiosEnc'

export default {
  login (params, successFn,errorFn) {
    axiosEnc.ajax({
      method: 'get',
      url: '/login',
      responseType: 'json',
      params: params,
      success: function (data) {
        if (data.code === 1) {
          successFn(data.content)
        } else {
          errorFn(data.content)
        }
      },
      error: function (data) {
        errorFn(data.content)
      }
    })
  }
}
