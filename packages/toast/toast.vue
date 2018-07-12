<template>
    <transition name="fade-in">
        <div class="t-toast" :class="[positionClasses]" :style="stylesWarp" v-show="visible">
            <div class="t-toast-header" v-if="normalizedIcon">
                <base-icon class="t-toast-header-icon" :icon="normalizedIcon"></base-icon>
            </div>

            <div class="t-toast-content">
                <div class="t-toast-content-message" v-html="message"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import BaseIcon from '../icon/icon.js'

export default {
    name: 'BaseToast',

    data () {
        return {
            visible: false,
            duration: 3000,

            message: '',
            /**
             * 可选值
             * top， middle， bottom
             */
            position: 'middle',
            /**
             * 可选值
             * success, error, warning
             */
            type: '',
            icon: '',
            /**
             * 关闭时的回调函数
             */
            onClose: null
        }
    },

    computed: {
        normalizedIcon () {
            return this.icon || this.type
        },
        positionClasses () {
            return `is-place-${this.position}`
        },
        stylesWarp () {
            const styles = {}

            styles['padding'] = this.normalizedIcon ? '20px' : '10px'

            return styles
        }
    },

    watch: {
        visible (val) {
            if (val === false) {
                this.$el.addEventListener('transitionend', this.destroyElement)
            }
        }
    },

    methods: {
        close () {
            this.visible = false
            if (typeof this.onClose === 'function') {
                this.onClose()
            }
        },

        destroyElement () {
            this.$el.removeEventListener('transitionend', this.destroyElement)
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        },

        startTimer () {
            setTimeout(() => {
                this.close()
            }, this.duration)
        }
    },

    mounted () {
        this.startTimer()
    },

    components: {
        BaseIcon
    }
}
</script>
