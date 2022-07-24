// vue router
import router from '@/router/index'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:svg-icons-register'
import 'ant-design-vue/dist/antd.css'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
