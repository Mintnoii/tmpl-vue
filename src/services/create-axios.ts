import qs from 'qs'
import axios, { AxiosInstance } from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'
import { defaultRequestHandler, defaultRequestErrorHandler, defaultResponseErrorHandler } from './handlers/default'
import { IAxiosHandlers } from './index.d'
const cookies = useCookies(['endpoint'])

const CreateAxiosInstance = (handlers: IAxiosHandlers) => {
  const {
    responseHandler,
    requestHandler = defaultRequestHandler,
    requestErrorHandler = defaultRequestErrorHandler,
    responseErrorHandler = defaultResponseErrorHandler
  } = handlers
  // todo 请求头的设置(自定义拓展)
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: cookies.get('endpoint'),
    timeout: 0,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'comma' })
    }
  })
  // 请求拦截
  axiosInstance.interceptors.request.use(requestHandler, requestErrorHandler)
  // 响应拦截
  axiosInstance.interceptors.response.use(responseHandler, responseErrorHandler)
  return axiosInstance
}

export default CreateAxiosInstance
