import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//引入store
import store from '@/store/store.js'

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})

//请求拦截器
requests.interceptors.request.use((config) => {
  // 请求头添加一个字段（userTempId）:和后台商量好这个名字
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  //需要携带token带给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token
  }
  nprogress.start()
  return config
})
//响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done()
    return res.data
  },
  // eslint-disable-next-line no-unused-vars
  (err) => {
    alert('服务器响应数据失败')
  }
)

export default requests
