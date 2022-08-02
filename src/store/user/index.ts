import { defineStore } from 'pinia'
import { UserInfo } from './index.d'

const defaultUserInfo: UserInfo = {
  id: '',
  token: '',
  username: '',
  accessToken: ''
}

export const useUserStore = defineStore(
  'userStore',
  () => {
    const userInfo = ref<UserInfo>(defaultUserInfo)
    const setUserInfo = (payload: UserInfo) => {
      const { id, token } = payload
      userInfo.value = { ...payload, accessToken: `token ${id} ${token}` }
    }
    return { userInfo, setUserInfo, persist: true }
  },
  {
    persist: {
      key: 'USERINFO'
    }
  }
)
