import Apis from './apis'

const getSettings = () => Apis.getSettings()

const userLogin = (data: any) => {
  // todo 一些前置操作
  return Apis.userLogin(data)
}

const DemoInterfaces = {
  getSettings,
  userLogin
}

export default DemoInterfaces
