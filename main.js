import Vue from 'vue'
import App from './app/app.vue'
import router from './router'

new Vue({
    router,
    render: h => h(App)
}).$mount('#root')