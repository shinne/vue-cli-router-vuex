import axios from 'axios'
import assign from 'lodash.assign'

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
    /*headers: {'X-Requested-With': 'XMLHttpRequest'},*/
    // 网络异常，提示框
    errorToast: true,
    // 是否打开loading
    showLoading: true,
    timeout: 10000,
    success: function () {},
    error: function () {}
  },
  send (cfg){
    var opt = assign({}, this.defaultCfg, cfg)
    /*opt.showLoading && store.commit("")*/
    axios(opt)
      .then(function (axios) {
        openLoading
      })
      .catch(function (axios) {

      })
  }
}

export default axiosEnc
