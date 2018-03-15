import axiosEnc from '../lib/axiosEnc'

export default {
  getRightsImgs (params, successFn,errorFn) {
    axiosEnc.ajax({
      method: 'get',
      url: '/getRightImgs',
      responseType: 'json',
      success: function (data) {
        successFn(data.content)
      },
      error: function (data) {
        errorFn(data.content)
      }
    })
  }
}
