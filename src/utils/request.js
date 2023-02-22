import axios from 'axios'
import { get } from '@/utils/store'

// 在使用时灵活导入需要的内容
import { Message } from 'element-ui'

// axios.get()
const instance = axios.create({
  baseURL: 'http://192.168.92.16:7000', // 基础url  以后发起的请求直接写 接口 即可，没必要写端口号之前的内容
  timeout: 30000, // 过期时间  毫秒为单位
  withCredentials: false // 涉及跨域请求时，是否携带cookie  默认值false
  // jsonp  cors  代理服务器
})
// instance.get();
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log('请求被拦截')
    // console.log(config); // config 请求相关的设置
    let token = ''
    try {
      // token = localStorage.getItem("mall");
      token = get('zmall')
    } catch (err) {
      token = ''
    }
    // if (token) {
    //   config.headers.Authorization
    // }
    config.headers.Authorization = 'JWT ' + token
    return config // 请求拦截器中必须存在return，否则该次请求一直得不到响应
  },
  (err) => {
    console.log('请求被拦截，且失败')
    return Promise.reject(err) // Promise.reject(err)  可以直接创建一个reject的Promise对象
  }
)

// 响应的拦截器
instance.interceptors.response.use(
  (response) => {
    console.log('响应被拦截')
    // console.log(response); // 响应信息
    // ...
    return response
  },
  (err) => {
    // console.log('响应被拦截，且错误')
    const { status, data: { msg } } = err.response
    // 根据后台返回的提示设置前端的提示提示
    let statusMsg = ''
    if (typeof msg === 'string') {
      statusMsg = msg
    } else if (typeof msg === 'object') {
      statusMsg = msg.non_field_errors.join('')
    }
    const errStatus = {
      401: 'Authentication failed', // Authentication failed身份验证失败
      404: 'The request does not exist', // 该请求不存在
      400: 'There is a problem with the request parameters', // 请求参数存在问题
      403: 'The server rejected the request', // 服务器拒绝请求
      500: 'Server exception' // 服务器出现异常
    }
    // 给用户提示
    Message.error(statusMsg || errStatus[status] || 'An unknown error has occurred')
    return Promise.reject(err)
  }
)

export default instance
