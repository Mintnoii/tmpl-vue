// todo 可自定义返回类型
interface IResponse {
  ok: boolean
  data: any
  msg: any
  [key: string]: any
}
// todo 可自定义应用程序接口
interface AppInterfaces {
  getSettings: () => Promise<IResponse>
  userLogin: (data: any) => Promise<IResponse>
}
