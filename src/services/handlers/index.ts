import { AxiosResponse } from 'axios'
import { ResponseHandlerFunc } from '@/services/index.d'

// 响应拦截
export const responseHandler: ResponseHandlerFunc = (response: AxiosResponse) => {
  // console.log('axios response: ', response)
  const { data } = response
  // todo 响应数据的格式化(自定义拓展)
  if (Array.isArray(data) || data instanceof Blob) {
    response.data = {
      ok: true,
      data,
      msg: null
    }
  }
  if (data instanceof Object) {
    const { error_code = 0, error_reason = '' } = data
    // console.log(error_code, error_reason, data)
    if (error_code !== 0) {
      response.data = {
        ok: false,
        data: null,
        msg: error_reason
      }
    } else {
      response.data = { ok: true, data: data.hasOwnProperty('data') ? data.data : data }
    }
  }
  const isOK = response.data.ok
  return isOK ? Promise.resolve(response.data) : Promise.reject(response.data)
}
