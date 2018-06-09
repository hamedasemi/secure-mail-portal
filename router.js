import Vue from 'vue'
import VueRouter from 'vue-router'

import AppLogin from './app/login/login.vue'
import AppDashboard from './app/dashboard/dashboard.vue'
import AppSettings from './app/settings/settings.vue'
import AppHelp from './app/help/help.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/login', component: AppLogin },
        { path: '/dashboard', component: AppDashboard },
        { path: '/settings', component: AppSettings },
        { path: '/help', component: AppHelp }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router