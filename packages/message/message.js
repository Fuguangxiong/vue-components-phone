import './message.scss'
import Vue from 'vue'
import MessageComponent from './message.vue'

function merge (target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        const source = arguments[i]
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                const value = source[prop]
                if (value !== undefined) {
                    target[prop] = value
                }
            }
        }
    }

    return target
}

const defaults = {
    type: '',
    title: '提示',
    message: ''
}

const MessageConstructor = Vue.extend(MessageComponent)

function showMessage ({ options, callback, resolve, reject }) {
    const instance = new MessageConstructor({
        el: document.createElement('div'),
        data: options
    })
    instance.callback = function (action) {
        const type = options.type
        if (type === 'alert') {
            resolve(action)
        }
        if (type === 'confirm') {
            action === 'confirm' ? resolve(action) : reject(action)
        }
        if (type === 'prompt') {
            const value = instance.inputValue
            action === 'confirm' ? resolve({ action, value }) : reject({ action, value })
        }
    }

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.visible = true
    })
}

const MessageBox = function (options, callback) {
    if (typeof options === 'string') {
        options = {
            message: options
        }
    }

    return new Promise((resolve, reject) => {
        options = merge({}, defaults, options)
        showMessage({ options, callback, resolve, reject })
    })
}

MessageBox.alert = function (message, title, options) {
    if (typeof title === 'object') {
        options = title
        title = ''
    }
    return MessageBox(merge({
        type: 'alert',
        title: title,
        message: message
    }, options))
}

MessageBox.confirm = function (message, title, options) {
    if (typeof title === 'object') {
        options = title
        title = ''
    }
    return MessageBox(merge({
        type: 'confirm',
        title: title,
        message: message,
        showCancelButton: true
    }, options))
}

MessageBox.prompt = function (message, title, options) {
    if (typeof title === 'object') {
        options = title
        title = ''
    }
    return MessageBox(merge({
        type: 'prompt',
        title: title,
        message: message,
        showCancelButton: true,
        showInput: true
    }, options))
}

export default MessageBox
