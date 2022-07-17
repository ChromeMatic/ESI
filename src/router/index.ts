import { createWebHistory, createRouter, RouteRecordRaw  } from 'vue-router'
import HomePage from "../pages/home.vue";
import AboutPage from "../pages/About.vue";
import ServicesPage from "../pages/Services.vue";
import ContactPage from "../pages/contact.vue"

const routes: Array<RouteRecordRaw>  = [

    {
        path:'/',
        name:'home',
        component: HomePage
    },

    {
        path:'/about',
        name:'about',
        component: AboutPage
    },

    {
        path:'/services',
        name:'services',
        component: ServicesPage  
    },

    {
        path:'/contact',
        name:'contact',
        component : ContactPage
    },

]

const router = createRouter({history:createWebHistory(),routes})

export default router