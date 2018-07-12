const ELEMENT_ATTR_NAME = '@@ImageCombine'

const defaults = {
    images: [],
    onload () {},
    onerror () {}
}

/**
 * 将图片地址转成图片
 * @returns {Array} promises数组，promise参数是 image 对象
 */
function loadImages () {
    return this.options.images.map(path => {
        return new Promise((resolve, reject) => {
            const image = new Image()
            /**
             * 解决问题（跨域问题）
             * Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported
             */
            image.setAttribute('crossOrigin', 'anonymous')
            image.onload = function () {
                resolve(image)
            }
            image.onerror = function (event) {
                const path = event.path[0].src
                reject(path)
            }
            image.src = path
        })
    })
}

/**
 * 将所有图片画到画布上
 * @returns {Promise}
 */
function drawCanvas (promises) {
    return Promise.all(promises)
        .then(res => {
            // 计算画布大小
            const canvasWidth = this.el.clientWidth * 2
            let canvasHeight = 0

            res.forEach(image => {
                // 高度是所有图片高度的累加
                canvasHeight += canvasWidth * image.height / image.width
            })

            // 创建画布，设置大小
            const canvas = document.createElement('canvas')
            canvas.width = canvasWidth
            canvas.height = canvasHeight
            const context = canvas.getContext('2d')

            // 循环将所有图片画到画布上
            let prevImageHeightTotal = 0
            res.forEach(image => {
                const drawHeight = canvasWidth * image.height / image.width
                context.drawImage(image, 0, prevImageHeightTotal, canvasWidth, drawHeight)
                prevImageHeightTotal += drawHeight
            })

            /**
             * 转换成 img.src 所需要的参数格式 dataURL
             */
            return canvas.toDataURL('image/jpeg', 1.0)
        })
}

/**
 * 执行主要函数
 * bind / update 都会执行
 */
function execute (el, binding, vnode) {
    // 防止重复执行
    if (el[ELEMENT_ATTR_NAME].done) {
        return
    }

    // 格式化参数
    if (typeof binding.value === 'function') {
        binding.value = {
            onload: binding.value
        }
    }
    if (el.dataset.images) {
        binding.value.images = el.dataset.images.split(',')
    }

    // 执行过程中所需参数
    const options = Object.assign({}, defaults, binding.value)

    const self = {
        el,
        vm: vnode.context,

        options
    }

    if (options.images && options.images.length) {
        const promises = loadImages.apply(self)
        drawCanvas.call(self, promises)
            .then(dataURL => {
                el.src = dataURL
                // setTimeout(options.onload, 1000)
                vnode.context.$nextTick(options.onload)
            })
            .then(() => {
                el[ELEMENT_ATTR_NAME].done = true
            })
            .catch(errorImagePath => {
                options.onerror(errorImagePath)
            })
    }
}

export default {
    name: 'imageCombine',

    inserted (el, binding, vnode) {
        if (!el[ELEMENT_ATTR_NAME]) {
            el[ELEMENT_ATTR_NAME] = {}
        }

        execute(el, binding, vnode)
    },

    update (el, binding, vnode) {
        execute(el, binding, vnode)
    }
}
