import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import '@/styles/index.scss'

createApp(App)
.use(router)
.use(ElementPlus)
.mount('#app')