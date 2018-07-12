import './loadmore.scss'
import Vue from 'vue'
import LoadmoreComponent from './loadmore.vue'

const defaults = {
    distance: 50
}

/**
 * 将组件插入文档
 */
function insertElement (el, options) {
    const LoadmoreConstructor = Vue.extend(LoadmoreComponent)
    const instance = new LoadmoreConstructor({
        el: document.createElement('div'),
        data: options
    })
    el.insertBefore(instance.$el, el.childNodes[0])

    return instance
}

/**
 * 获取需要绑定事件的元素
 */
function getScrollEventTarget (el) {
    let currentNode = el
    const getComputedStyle = document.defaultView.getComputedStyle

    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        const overflowY = getComputedStyle(currentNode).overflowY
        if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode
        }
        currentNode = currentNode.parentNode
    }
    return window
}

/**
 * 获取滚动条位置
 */
function getScrollTop (element) {
    if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
    }

    return element.scrollTop
}

/**
 * 监听 touch 事件
 */
function handleTouchStart (event) {
    const finger = event.changedTouches[0]

    this.startY = finger.pageY
    this.scrollTop = getScrollTop(this.scrollEventTarget)
    this.isExecute = false
}

function handleTouchMove (event) {
    const finger = event.changedTouches[0]
    const moveY = finger.pageY - this.startY
    console.log(this.scrollTop)

    if (this.scrollTop === 0 && moveY > 0) {
        event.preventDefault()
        this.isExecute = true
        this.instance.updateHeight(moveY, true)
    }
}

function handleTouchEnd (event) {
    if (!this.isExecute) return
    const finger = event.changedTouches[0]

    const moveY = finger.pageY - this.startY
    const done = () => {
        this.instance.updateHeight(0, false)
    }

    if (moveY < this.options.distance) {
        done()
    } else {
        this.options.callback(done)
    }
}

export default {
    name: 'loadmore',

    bind (el, binding) {
        if (typeof binding.value === 'function') {
            binding.value = {
                callback: binding.value
            }
        }
        const options = Object.assign({}, defaults, binding.value)
        const instance = insertElement(el, options)

        const self = {
            el,
            instance,
            options,

            scrollEventTarget: getScrollEventTarget(el),

            startY: 0,
            scrollTop: 0,
            isExecute: false
        }

        el.addEventListener('touchstart', handleTouchStart.bind(self))
        el.addEventListener('touchmove', handleTouchMove.bind(self))
        el.addEventListener('touchend', handleTouchEnd.bind(self))
    },
    unbind (el) {
        el.removeEventListener('touchstart', handleTouchStart)
        el.removeEventListener('touchmove', handleTouchMove)
        el.removeEventListener('touchend', handleTouchEnd)
    }
}
