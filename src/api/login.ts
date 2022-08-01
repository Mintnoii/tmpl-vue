import { useMintPost } from '@/libs/request/index'
// login api demo
export const useUserLogin = () => useMintPost('/user/account/remote_login/')
