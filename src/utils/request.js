import axios from 'axios'
const URL_PREFIX = '/api'

function request (options) {
  options.url = getRealUrl(options.url)

  return axios(options)
    .then(res => {
      return res.data.data
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error
      console.log('请求错误:' + status + statusText)

      return Promise.reject(error)
    })
}

function requestReturnCatch (options) {
  options.url = getRealUrl(options.url)

  return axios(options)
    .then(res => {
      return res.data.data
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error
      console.log('请求错误:' + status + statusText)

      return Promise.reject(error)
    })
}

// 处理url格式
function getRealUrl (url) {
  if (url.substr(0, 1) === '/') {
    return `${URL_PREFIX}${url}`
  } else {
    return `${URL_PREFIX}/${url}`
  }
}

export default { request, requestReturnCatch }
