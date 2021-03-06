import { createApp } from 'vue'
import './input.css'
import App from './App.vue'
import Router from "./router/index"
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(Router)
app.use(MotionPlugin)
app.mount('#app')