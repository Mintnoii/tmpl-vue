import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'
import errorHandler from '@/libs/request/errorHandler'
import { message } from 'ant-design-vue/es'
import { useUserStore } from '@/store/user'

const baseURL = import.meta.env.VITE_APP_BASE_URL

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 1000 * 30,
  headers: { 'Content-Type': 'application/json' }
})

// 请求拦截器
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  // TODO 在这里可以加上想要在请求发送前处理的逻辑 请根据实际情况自行修改
  // TODO 比如如果 token 存在 可以让每个请求携带自定义 token
  const { userInfo } = useUserStore()
  // console.log(userInfo,'userInfo',config);
  const { id, token } = userInfo
  if (token !== '' && id !== '' && config.headers) {
    config.headers.Authorization = `token ${id} ${token}`
  }
  return config
}, errorHandler)

// 响应拦截器
axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  // TODO 这里可以和后端约定状态码来进行对应的提示
  const dataAxios = response.data
  const { error_code, error_reason, data } = dataAxios
  // 根据 error_code 进行判断
  // 如果没有 error_code 代表这不是项目后端开发的接口
  // if (error_code === undefined) {
  //   return dataAxios;
  // }
  // 有 error_code 代表这是一个后端接口 可以进行进一步的判断
  // error_code === 0 代表没有错误
  // error_code === 1 代表请求错误
  // switch (error_code) {
  //   case 0:
  //     return dataAxios.data;
  //   case 1:
  //     throw Error(msg);
  //   case 401:
  //     throw Error(msg);
  //   default:
  //     return '不是正确的code';
  // }
  // console.log(dataAxios, 'dataAxios');
  if (response.status === 200 && error_code === 0) {
    response.data = data
    return response
  }
  message.warn(`${error_code}:${error_reason}`)
  return response
}, errorHandler)

export default axiosInstance

// 详见 https://vueuse.org/integrations/useaxios/#demo
/**
 * @param url  string
 * @param config AxiosRequestConfig
 * @param axiosInstance AxiosInstance
 * @param options UseAxiosOptions
 * @returns StrictUseAxiosReturn<T>
 */
export const useMintAxios = (url: string, config: AxiosRequestConfig) => useAxios(url, config, axiosInstance)

export function useMintGet(
  url: string,
  params?: { [key: string]: unknown },
  immediate = true,
  config?: AxiosRequestConfig
) {
  return useAxios(url, { ...(config || {}), params, method: 'GET' }, axiosInstance, { immediate })
}

export function useMintGetWithEmptyParams(url: string, immediate = true, config?: AxiosRequestConfig) {
  return useMintGet(url, {}, immediate, config)
}

export const useMintPost = (
  url: string,
  data?: { [key: string]: unknown },
  immediate = false,
  config?: AxiosRequestConfig
) => {
  // 立即执行，则使用初始化时候的 data
  if (immediate) {
    return useAxios(url, { ...(config || {}), data: data || {}, method: 'POST' }, axiosInstance, { immediate })
  }
  // 否则使用执行器传入的 data
  const { execute, ...rest } = useAxios(axiosInstance)
  return { execute: (data: { [key: string]: unknown }) => execute(url, { ...config, data, method: 'POST' }), ...rest }
}

export function useMintPostWithEmptyData(url: string, immediate = false, config?: AxiosRequestConfig) {
  return useMintPost(url, {}, immediate, config)
}
