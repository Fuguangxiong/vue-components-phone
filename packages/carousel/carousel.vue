<template>
    <section class="t-carousel" :style="styleWrapper"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'BaseCarousel',

    props: {
        height: {
            type: String,
            default: '200px'
        },
        /**
         * 初始name值
         */
        value: {
            type: [Number, String],
            default: 0
        },
        /**
         * 是否播放
         */
        play: {
            type: Boolean,
            default: false
        },
        /**
         * 自动播放的时间间隔
         */
        interval: {
            type: Number,
            default: 3000
        },
        /**
         * 竖向滚动
         */
        vertical: {
            type: Boolean,
            default: false
        },
        /**
         * 是否循环滚动
         */
        circular: {
            type: Boolean,
            default: false
        },
        /**
         * 间断播放时间
         * 间断播放为：固定从右侧 / 下侧 进入，左侧 / 上侧 离开
         */
        skip: {
            type: [Boolean, Number],
            default: false
        },
        /**
         * 禁止 touchmove 事件
         */
        noMove: {
            type: Boolean,
            default: true
        }
    },

    data () {
        return {
            /**
             * 子元素数组，非响应式，需要手动添加
             */
            items: [],

            currentName: this.value,
            timer: null,
            currentPlay: this.play,

            // 向左滑动为负，向右为正
            startX: 0,
            startY: 0
        }
    },

    computed: {
        currentIndex: {
            get () {
                const length = this.items.length
                if (length === 0) {
                    return 0
                }
                let index = typeof this.currentName === 'number'
                    ? this.currentName
                    : this.items.findIndex(item => item.name === this.currentName)

                index = index % length
                return index >= 0 ? index : index + length
            },
            set (val) {
                if (val > this.items.length - 1) {
                    if (!this.circular) {
                        return
                    }
                    val = 0
                }
                if (val < 0) {
                    if (!this.circular) {
                        return
                    }
                    val = this.items.length - 1
                }

                this.currentName = this.items[val].name || val
            }
        },
        styleWrapper () {
            return {
                height: `${this.height}`
            }
        }
    },

    watch: {
        value (val) {
            this.currentName = val
        },
        currentName (val) {
            this.$emit('input', val)
            this.$emit('change', val)
        },
        play (val) {
            this.currentPlay = val
        },
        currentPlay (val) {
            if (val) {
                this.startTimer()
            } else {
                this.stopTimer()
            }
        },

        items (val) {
            this.updateItemsPosition(this.currentIndex)
        },
        skip (val) {
            this.updateItemsPosition(this.currentIndex)
        },
        currentIndex (val) {
            this.updateItemsPosition(val)
        }
    },

    methods: {
        handleTouchStart (event) {
            if (this.noMove || this.skip) return
            event = event.changedTouches[0] || event
            this.startX = event.pageX
            this.startY = event.pageY
        },
        handleTouchMove (event) {
            if (this.noMove || this.skip) return
            event = event.changedTouches[0] || event

            const moveX = event.pageX - this.startX
            const moveY = event.pageY - this.startY

            this.items.forEach(item => item.moveItem(moveX, moveY))
        },
        handleTouchEnd (event) {
            if (this.noMove || this.skip) return
            event = event.changedTouches[0] || event

            const moveX = event.pageX - this.startX
            const moveY = event.pageY - this.startY

            const eleHeight = this.$el.offsetHeight
            const eleWidth = this.$el.offsetWidth

            if (this.vertical) {
                if (moveY > eleHeight / 3) {
                    if (this.currentIndex === 0) {
                        this.updateItemsPosition(this.currentIndex)
                        return
                    }

                    this.prev()
                } else if (moveY < -eleHeight / 3) {
                    if (this.currentIndex === this.items.length - 1) {
                        this.updateItemsPosition(this.currentIndex)
                        return
                    }

                    this.next()
                }
            } else {
                if (moveX > eleWidth / 3) {
                    if (this.currentIndex === 0) {
                        this.updateItemsPosition(this.currentIndex)
                        return
                    }

                    this.prev()
                } else if (moveX < -eleWidth / 3) {
                    if (this.currentIndex === this.items.length - 1) {
                        this.updateItemsPosition(this.currentIndex)
                        return
                    }

                    this.next()
                }
            }

            this.startX = 0
            this.startY = 0
        },
        /**
         * 尝试提前暂停timer
         */
        tryStopTimer () {
            // 如果正在播放，提前判断是否还有下一张，没有的话，则停止计时
            if (this.currentPlay && !this.circular && this.currentIndex === this.items.length - 1) {
                this.stopTimer()
            }
        },
        /**
         * 下一张
         */
        next () {
            this.currentIndex++
        },
        /**
         * 上一张
         */
        prev () {
            this.currentIndex--
        },
        /**
         * 执行函数
         */
        toggle () {
            const isShow = this.items.find(item => !!item.active)
            if (isShow) {
                this.items.forEach(item => item.hideItem())
                this.tryStopTimer()
            } else {
                this.next()
            }
        },
        translate () {
            this.next()
            this.tryStopTimer()
        },
        /**
         * 开始播放
         */
        startTimer () {
            if (typeof this.skip === 'number') {
                this.timer = setInterval(this.toggle, this.skip / 2)
            } else {
                this.timer = setInterval(this.translate, this.interval)
            }
        },
        /**
         * 停止播放
         */
        stopTimer () {
            clearInterval(this.timer)
            this.currentPlay = false
            this.$emit('update:play', false)
        },
        /**
         * 更新子元素
         */
        updateItems () {
            this.items = this.$children.filter(item => item.$options.name === 'BaseCarouselItem')
        },
        /**
         * 改变子元素位置
         */
        updateItemsPosition (activeIndex) {
            this.items.forEach((item, index) => {
                if (this.skip) {
                    item.toggleItem(index, activeIndex)
                    return
                }
                item.translateItem(index, activeIndex)
            })
        }
    },

    mounted () {
        if (this.play) {
            this.startTimer()
        }
    },

    beforeDestroy () {
        this.stopTimer()
    }
}
</script>
