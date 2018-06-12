import { Observable } from '../../../node_modules/rxjs/_esm2015/index.js'

import storage from './../storage/storage'

import Debug from '../../../node_modules/debug/src/browser.js'

const debug = new Debug('[app] [authentication]')

debug.enabled = true

export function status(path) {
    // Get token from localstorage
    if (storage.read("token") != undefined) {
        return true
    } else {
        return false;
    }
}

export function login() {
    // login to server
    // On success 
    // Save token to localstorage
    return new Observable(observer => {
        setTimeout(() => {
            debug('login:pass')
            storage.create("token", "0123456789")
            storage.create("user", JSON.stringify({ name: "hamed" }))
            observer.next({ name: "hamed" })
        }, 1000)
        // observer.complete()
    });
}

export function logout() {
    // logout from server    
    return new Observable(observer => {
        // On success 
        setTimeout(() => {
            debug('logout:pass')
            // clear token and user from localstorage
            storage.remove("token")
            storage.remove("user")
            observer.next({ name: "hamed" })
        }, 1000)
        // observer.complete()
    });
}

export default { logout, login, status }