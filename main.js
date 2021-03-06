import Vue from 'vue'
import App from './app/app.vue'
import router from './router'
import { browser, version } from './app/shared/detect/detect'
import Debug from "./node_modules/debug/src/browser.js";

const debug = new Debug("[main]");

debug.enabled = DEBUG;

document.body.setAttribute('browser', browser)
document.body.setAttribute('version', version)

Vue.prototype.$events = new Vue()
Vue.prototype.$state = new Vue()

new Vue({
    el: '#root',
    router,
    render: h => h(App)
})

