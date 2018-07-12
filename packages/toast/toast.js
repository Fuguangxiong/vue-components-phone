import './toast.scss'
import Vue from 'vue'
import ToastComponent from './toast.vue'

const ToastConstructor = Vue.extend(ToastComponent)

const Toast = function (options) {
    if (typeof options === 'string') {
        options = {
            message: options
        }
    }

    const instance = new ToastConstructor({
        el: document.createElement('div'),
        data: options
    })
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.visible = true
    })

    return instance
}

const types = ['success', 'warning', 'error']
types.forEach(type => {
    Toast[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            }
        }
        options.type = type
        return Toast(options)
    }
})

export default Toast
