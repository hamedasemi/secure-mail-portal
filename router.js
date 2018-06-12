import Vue from 'vue'
import VueRouter from 'vue-router'

import AppLogin from './app/login/login.vue'
import AppDashboard from './app/dashboard/dashboard.vue'
import AppSettings from './app/settings/settings.vue'
import AppHelp from './app/help/help.vue'
import AppNotFound from './app/not-found/not-found.vue'

import authentication from './app/shared/authentication/authentication.js'

Vue.use(VueRouter)

Vue.config.productionTip = false

let routes = [
    { path: '/', redirect: '/dashboard' },
    { path: '/login', component: AppLogin },
    { path: '/dashboard', component: AppDashboard, beforeEnter: guard },
    { path: '/settings', component: AppSettings, beforeEnter: guard },
    { path: '/help', component: AppHelp, beforeEnter: guard },
    { path: '*', component: AppNotFound }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

function guard(to, from, next){
    if(authentication.status(to.path, from.path)){
        next()
    } else {
        next('/login')
    }
}

export default router