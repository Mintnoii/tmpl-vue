import myRequest from '@/services'

/**
 * 获取所有数字人，即配置树
 * @url /dmp/material/index/
 * @method GET
 */
const getSettings = () => myRequest('/dmp/material/index/')

const userLogin = (data: any) => myRequest('/user/account/admin_login/', { method: 'POST', data })

export default {
  getSettings,
  userLogin
}
