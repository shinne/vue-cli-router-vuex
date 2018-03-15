import axiosEnc from '../lib/axiosEnc'

export default {
  getScoreList (params, successFn, errorFn) {
    axiosEnc.ajax({
      method: 'get',
      url: '/getScoreList',
      responseType: 'json',
      params: params,
      success:function (data) {
        successFn(data.content)
      },
      error:function(data){
        errorFn(data.content)
      }

    })
  },
  saveScoreList (params, successFn, errorFn) {
    axiosEnc.ajax({
      method: 'get',
      url: '/saveScoreList',
      responseType: 'json',
      params: params,
      success: function (data) {
        successFn(data.content)
      },
      error: function (data) {
        errorFn(data)
      }
    })
  },
}
