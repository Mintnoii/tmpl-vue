import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.onError((error) => {
  console.log(error.toString())
  const pattern = /Loading chunk.+failed/g
  const isChunkLoadFailed = error.toString().match(pattern)
  if (isChunkLoadFailed) {
    console.error('资源加载失败')
    // 网络断开 系统升级等情况可以提示用户需要刷新页面 location.reload()
  }
})

router.afterEach((to) => {
  NProgress.done()
})

export default router
