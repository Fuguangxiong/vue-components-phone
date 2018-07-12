const ELEMENT_ATTR_NAME = '@@InfiniteScroll'
const defaults = {
    callback () {
        console.log('请传递回调函数')
    },
    distance: 50,
    timeout: 1000,
    disabled: false // update 钩子中实时获取
}

/**
 * 防抖动函数
 */
function throttle (fn, delay) {
    let now
    let lastExec
    // let timer
    let context
    let args

    const execute = function () {
        fn.apply(context, args)
        lastExec = now
    }

    return function () {
        context = this
        args = arguments

        now = Date.now()

        // if (timer) {
        //     clearTimeout(timer)
        //     timer = null
        // }

        if (lastExec) {
            const diff = delay - (now - lastExec)
            if (diff < 0) {
                execute()
            } else {
                // timer = setTimeout(() => {
                //     execute()
                // }, diff)
            }
        } else {
            execute()
        }
    }
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

function getElementTop (element) {
    if (element === window) {
        return getScrollTop(window)
    }

    return element.getBoundingClientRect().top + getScrollTop(window)
}

/**
 * 获取元素可见高度
 */
function getVisibleHeight (element) {
    if (element === window) {
        return document.documentElement.clientHeight
    }

    return element.clientHeight
}

/**
 * 获取需要绑定事件的元素
 */
function getScrollEventTarget (element) {
    let currentNode = element
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
 * 判断是否滑动到底部
 */
function isReachBottom (el, options) {
    const scrollEventTarget = getScrollEventTarget(el)
    let beforeScrollTop = getScrollTop(scrollEventTarget)

    return function () {
        const viewportScrollTop = getScrollTop(scrollEventTarget)
        const viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget) + options.distance
        const isSlideDown = viewportScrollTop > beforeScrollTop
        beforeScrollTop = viewportScrollTop

        if (!isSlideDown) {
            return false
        }

        let shouldTrigger = false

        if (scrollEventTarget === el) {
            shouldTrigger = viewportBottom >= scrollEventTarget.scrollHeight
        } else {
            const elementBottom = getElementTop(el) - getElementTop(scrollEventTarget) + el.offsetHeight + viewportScrollTop

            shouldTrigger = viewportBottom >= elementBottom
        }

        return shouldTrigger
    }
}

/**
 * 添加绑定事件
 */
function addListener (el) {
    if (!el[ELEMENT_ATTR_NAME].binded) {
        el[ELEMENT_ATTR_NAME].scrollEventTarget.addEventListener('scroll', el[ELEMENT_ATTR_NAME].scrollListener)
        el[ELEMENT_ATTR_NAME].binded = true
    }
}

/**
 * 解除绑定事件
 */
function removeListener (el) {
    if (el[ELEMENT_ATTR_NAME].binded) {
        el[ELEMENT_ATTR_NAME].scrollEventTarget.removeEventListener('scroll', el[ELEMENT_ATTR_NAME].scrollListener)
        el[ELEMENT_ATTR_NAME].binded = false
    }
}

export default {
    inserted (el, binding, vnode) {
        if (typeof binding.value === 'function') {
            binding.value = {
                callback: binding.value
            }
        }
        const options = Object.assign({}, defaults, binding.value)

        const expression = throttle(options.callback, options.timeout)
        const shouldTrigger = isReachBottom(el, options)

        el[ELEMENT_ATTR_NAME] = {
            binded: false,

            options,
            vm: vnode.context,

            scrollEventTarget: getScrollEventTarget(el),
            scrollListener () {
                if (shouldTrigger()) {
                    expression()
                }
            }
        }

        addListener(el)
    },

    update (el, binding, vnode) {
        const disabled = binding.value.disabled
        disabled ? removeListener(el) : addListener(el)
    },

    unbind: removeListener
}
