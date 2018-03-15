import axios from 'axios'
import assign from 'lodash.assign'
import store from '../store/index'
import * as loadingTypes from '../store/loading/mutationsType'
import * as toastTypes from '../store/errorToast/mutationsType'

axios.interceptors.request.use(function (config) {
  var params = {
    token: 'just test token'
  }
  if (config.params) {
    assign(config.params, params)
  }else{
    config.params = params
  }
  return config
})

var axiosEnc = {
  defaultCfg: {
    method: 'post',
    // 网络异常，提示框
    errorToast: true,
    // 是否打开loading
    showLoading: true,
    timeout: 10000,
    success: function () {},
    error: function () {}
  },
  ajax (cfg) {
    var opt = assign({}, this.defaultCfg, cfg)
    opt.showLoading && store.commit(loadingTypes.LOADING_SHOW)
    axios(opt)
      .then(function (axios) {
        opt.showLoading && store.commit(loadingTypes.LOADING_CLOSE)
        axios.config.success(axios.data)
      })
      .catch(function (axios) {
        opt.showLoading && store.commit(loadingTypes.LOADING_CLOSE)
        opt.errorToast && store.commit(toastTypes.TOAST_SHOW)
        axios.config.error(axios.data)
      })
  }
}

export default axiosEnc
