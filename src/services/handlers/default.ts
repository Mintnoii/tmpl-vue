import { useCookies } from '@vueuse/integrations/useCookies'
import { RequestHandlerFunc, ErrorHandlerFunc } from '@/services/index.d'

interface ICodeStatusMap {
  [key: number]: string
  NetworkError: string
}
const cookies = useCookies(['authorization'])
// todo 通用报错处理(自定义拓展)
const codeStatusMap: ICodeStatusMap = {
  400: '[400]: 请求参数错误',
  401: '[401]: 账户未授权，请先登录',
  403: '[403]: 拒绝访问',
  404: '[404]: 请求地址错误',
  405: '[405]: 请求方法错误',
  408: '[408]: 请求超时',
  500: '[500]: 服务器内部错误',
  501: '[501]: 服务未实现',
  502: '[502]: 网关错误',
  503: '[503]: 服务不可用',
  504: '[504]: 网关超时',
  505: '[505]: HTTP版本不受支持',
  NetworkError: '[NetworkError]: 网络连接异常,请稍后再试!'
}
// 默认请求拦截
export const defaultRequestHandler: RequestHandlerFunc = (requestConfig) => {
  const { data, headers } = requestConfig
  //  todo 权限信息预处理(自定义拓展)
  const auth = cookies.get('authorization')
  if (auth !== '') {
    headers.Authorization = auth
  }
  if (Array.isArray(data)) {
    requestConfig.data = JSON.stringify(data)
  }
  return requestConfig
}
// 默认请求错误拦截
export const defaultRequestErrorHandler: ErrorHandlerFunc = (error) => Promise.reject(error)

// 默认响应错误拦截
export const defaultResponseErrorHandler: ErrorHandlerFunc = (error) => {
  // console.log('errorHandler：', error.response)
  const { status = 'NetworkError', config } = error.response || {}
  // if (status == 401) {}
  // 身份已过期，请重新登录！
  const statusMsg = `${codeStatusMap[status] || status} ${config?.url}`
  // * 返回接口的错误信息 可以自定义一些处理逻辑
  console.error(statusMsg)
  return Promise.reject({ ok: false, msg: statusMsg })
}
