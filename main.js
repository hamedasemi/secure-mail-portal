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

const DataBus = new Vue();

Object.defineProperties(Vue.prototype, {
    $state: {
        get: function () {
            return DataBus;
        }
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#root')

