const ELEMENT_ATTR_NAME = '@@Lazyload'

const defaults = {
    distance: 10,
    image: '',
    loading: '/static/images/logo.png'
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
 * 获取滚动条位置
 */
function getScrollTop (element) {
    if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
    }

    return element.scrollTop
}

/**
 * 显示loading样式
 * 如果提供了加载图片，则显示加载图片
 */
function loading () {
    this.el.src = this.options.loading
}

/**
 * 检测图片是否可以加载
 */
function isCanShow () {
    const offsetTop = this.el.offsetTop
    const scrollTop = getScrollTop(this.scrollEventTarget)
    const clientHeight = this.scrollEventTarget.clientHeight

    if (scrollTop + clientHeight >= offsetTop + this.options.distance) {
        return true
    }
    return false
}

/**
 * 加载图片
 */
function loadImage () {
    const self = this
    const image = new Image()
    const src = this.options.image
    image.onload = function () {
        self.el.src = src
        self.el[ELEMENT_ATTR_NAME].binded = true
        self.scrollEventTarget.removeEventListener('scroll', self.listener)
    }
    image.src = src
}

/**
 * 尝试执行绑定图片
 */
function executeLoadImage () {
    if (!isCanShow.apply(this)) {
        return false
    }
    loadImage.apply(this)
    return true
}

/**
 * 主要执行函数，bind / update 都会执行
 */
function execute (el, binding, vnode) {
    if (typeof binding.value === 'string') {
        binding.value = {
            image: binding.value
        }
    }
    const options = Object.assign({}, defaults, binding.value)

    // 防止重复绑定
    if (el[ELEMENT_ATTR_NAME].binded) {
        return
    }

    const self = {
        el,
        vm: vnode.context,
        scrollEventTarget: getScrollEventTarget(el),

        options
    }
    self.listener = executeLoadImage.bind(self)

    loading.apply(self)
    const result = executeLoadImage.apply(self)
    if (!result) {
        self.scrollEventTarget.addEventListener('scroll', self.listener)
    }
}

export default {
    name: 'lazyload',

    bind (el) {
        if (!el[ELEMENT_ATTR_NAME]) {
            el[ELEMENT_ATTR_NAME] = {
                binded: false
            }
        }
    },

    inserted: execute,
    update: execute
}
