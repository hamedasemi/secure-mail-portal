import Debug from '../../../node_modules/debug/src/browser.js'

const debug = new Debug('[app] [storage]')

debug.enabled = true

export function create(key, value) {
    debug('create', key, value)
    return localStorage.setItem(key, value)
}

export function read(key) {
    debug('read', key)
    return localStorage.getItem(key)
}

export function update(key, value) {
    debug('update', key, value)
    return localStorage.setItem(key, value)
}

export function remove(key) {
    debug('remove', key)
    return localStorage.removeItem(key)
}


export default { create, read, update, remove }
