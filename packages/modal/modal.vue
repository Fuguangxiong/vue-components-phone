<template>
    <transition
        name="modal"
        @before-enter="handleBeforeEnter"
        @after-enter="handleAfterEnter"
        @before-leave="handleBeforeLeave"
        @after-leave="handleAfterLeave">
        <div class="modal-wrapper" v-show="visible" @click="handleClick" @touchmove.prevent.stop="handleTouchmove"></div>
    </transition>
</template>

<script>
export default {
    props: {
        visible: Boolean
    },

    data () {
        return {
            bodyOverflow: null
        }
    },

    methods: {
        handleClick () {
            this.$emit('click')
        },
        handleTouchmove () {
            // console.log('阻止滑动')
        },
        /**
         * 动画钩子
         */
        handleBeforeEnter (el) {
            this.bodyOverflow = document.body.style.overflow
            document.body.style.overflow = 'hidden'

            this.$emit('before-enter')
        },
        handleAfterEnter (el) {
            this.$emit('after-enter')
        },
        handleBeforeLeave (el) {
            this.$emit('before-leave')
        },
        handleAfterLeave (el) {
            document.body.style.overflow = this.bodyOverflow

            this.$emit('after-leave')
        }
    }
}
</script>
