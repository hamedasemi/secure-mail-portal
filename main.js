import Vue from 'vue'
import App from './app/app.vue'
import router from './router'

const EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
    $events: {
        get: function () {
            return EventBus;
        }
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#root')

