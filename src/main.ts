import { createApp } from 'vue'
import './input.css'
import App from './App.vue'
import Router from "./router/index"
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
app.use(Router)
app.use(MotionPlugin)
app.mount('#app')