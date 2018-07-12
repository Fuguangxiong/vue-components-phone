<template>
    <div class="t-popup">
        <transition
            :name="transition"
            @after-enter="handleAfterEnterPopup"
            @after-leave="handleAfterLeavePopup">
            <div class="t-popup-content" v-show="currentVisible" :style="styles" :class="classes">
                <slot></slot>
            </div>
        </transition>

        <base-modal
            :visible="currentVisible"
            @click="handleModalClick">
        </base-modal>
    </div>
</template>

<script>
import BaseModal from '../modal/modal.vue'

export default {
    name: 'BasePopup',

    props: {
        visible: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '80%'
        },
        height: {
            type: String,
            default: 'auto'
        },
        /**
         * 可选值 top, bottom, left, right
         */
        position: {
            type: String,
            default: 'bottom',
            validator (val) {
                return ['top', 'bottom', 'left', 'right'].indexOf(val) > -1
            }
        },
        closeOnClickModal: {
            type: Boolean,
            default: true
        },
        transparent: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            currentVisible: this.visible
        }
    },

    computed: {
        transition () {
            return `slide-in-${this.position}`
        },
        normalizedWidth () {
            if (this.position === 'top' || this.position === 'bottom') {
                return '100%'
            }
            return this.width
        },
        normalizedHeight () {
            if (this.position === 'left' || this.position === 'right') {
                return '100%'
            }
            return this.height
        },
        styles () {
            return {
                width: this.normalizedWidth,
                height: this.normalizedHeight
            }
        },
        classes () {
            return {
                [`is-${this.position}`]: true,
                'is-transparent': this.transparent
            }
        }
    },

    watch: {
        visible (val) {
            this.currentVisible = val
        },
        currentVisible (val) {
            this.$emit('update:visible', val)
        }
    },

    methods: {
        handleModalClick () {
            if (this.closeOnClickModal) {
                this.currentVisible = false
            }
        },
        /**
         * 动画钩子
         */
        handleAfterEnterPopup () {
            this.$emit('open')
        },
        handleAfterLeavePopup () {
            this.$emit('close')
        }
    },

    components: {
        BaseModal
    }
}
</script>
