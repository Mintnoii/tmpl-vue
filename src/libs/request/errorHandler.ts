// 异常拦截处理器
import { AxiosError } from 'axios'
declare interface codeMessageMapTypes {
  400: string
  401: string
  403: string
  404: string
  405: string
  408: string
  500: string
  501: string
  502: string
  503: string
  504: string
  505: string
  [key: string]: string
}

const codeMessageMap: codeMessageMapTypes = {
  400: '[400]:请求参数错误',
  401: '[401]:账户未授权，请先登录',
  403: '[403]:拒绝访问',
  404: '[404]:请求路径错误', // `请求地址出错: ${error.response?.config.url}`;
  405: '[405]:请求方法错误',
  408: '[408]:请求超时',
  500: '[500]:服务器内部错误',
  501: '[501]:服务未实现',
  502: '[502]:网关错误',
  503: '[503]:服务不可用',
  504: '[504]:网关超时',
  505: '[505]:HTTP版本不受支持'
}

const showCodeMessage = (statusCode: number | string | undefined) => {
  const msg = codeMessageMap[JSON.stringify(statusCode)] || '网络连接异常,请稍后再试!'

  message.error(msg)
}

const errorHandler = (error: AxiosError) => {
  console.error('errorHandler', error)
  const status = error?.response?.status || 0
  showCodeMessage(status)
  // * 自定义一些处理逻辑
  // if(status >= 400 && status < 500) {
  //   const {error_code, error_reason} = error?.response?.data;
  //   console.error(`[${error_code}]:${error_reason}`);
  // }
  // ? status 401 可以清除token信息并跳转到登录页面 伪代码
  // ? status 404 可以打印具体的路径
  // switch (status) {
  //   case 401:
  //       const useStore = useUserStore();
  //       useStore.logout();
  //       router.replace({
  //           path: 'login',
  //           query: {redirect: router.currentRoute.fullPath}
  //       })
  //   case 404:
  //     console.log(error.response?.config?.url);
  // }
  // 返回接口返回的错误信息
  return Promise.reject(error?.response?.data)
}
export default errorHandler
