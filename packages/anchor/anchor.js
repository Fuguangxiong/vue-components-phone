const defaults = {
    selector: '',
    step: 50
}

const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame

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
 * 锚点跳转
 */
function smartJump () {
    let nextScrollTop
    const distance = Math.abs(this.targetScrollTop - this.currentScrollTop)
    if (distance === 0) {
        return
    }
    const step = this.options.step
    if (distance <= step) {
        nextScrollTop = this.targetScrollTop
    } else {
        nextScrollTop = this.targetScrollTop > this.currentScrollTop ? this.currentScrollTop + step : this.currentScrollTop - step
    }
    this.scrollEventTarget.scrollTop = nextScrollTop

    this.currentScrollTop = nextScrollTop
    requestAnimationFrame(smartJump.bind(this))
}

/**
 * 响应点击事件
 */
function handleClick () {
    this.targetScrollTop = document.querySelector(this.options.selector).offsetTop
    this.currentScrollTop = getScrollTop(this.scrollEventTarget)

    requestAnimationFrame(smartJump.bind(this))
}

export default {
    inserted (el, binding) {
        if (typeof binding.value === 'string') {
            binding.value = {
                selector: binding.value
            }
        }
        const options = Object.assign({}, defaults, binding.value)

        const self = {
            el,
            binding,
            options,

            scrollEventTarget: getScrollEventTarget(el),
            targetScrollTop: 0,
            currentScrollTop: 0
        }

        el.addEventListener('click', handleClick.bind(self))
    },
    unbind (el) {
        el.addEventListener('click', handleClick)
    }
}
