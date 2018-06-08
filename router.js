import Vue from 'vue'
import VueRouter from 'vue-router'
import AppBar from './app/core/bar.vue'
import AppFoo from './app/core/foo.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/foo', component: AppFoo },
        { path: '/bar', component: AppBar }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router