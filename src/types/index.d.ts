interface IBizResponse {
  error_code: number
  error_reason: string
  data: any
}
/**
 * 接口返回类型，经过前端优化
 * ok 成功与否
 * data 接口数据
 * msg 错误信息
 */
interface IResponse {
  ok: boolean
  data: any
  msg: any
}
