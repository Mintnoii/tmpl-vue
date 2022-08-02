import router from '@/router/index'
import App from './app.vue'
import store from './store/index'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
