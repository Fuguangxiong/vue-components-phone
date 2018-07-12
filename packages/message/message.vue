<template>
    <div class="msgbox-wrapper">
        <transition
            name="bounce"
            @after-enter="handleAfterEnterBox"
            @after-leave="handleAfterLeaveBox">
            <section class="msgbox" v-show="visibleBox" ref="msgbox">
                <div class="msgbox-header" v-if="title">
                    <div class="msgbox-title">{{ title }}</div>
                </div>

                <div class="msgbox-content" v-if="message || showInput">
                    <div class="msgbox-message" v-html="message"></div>

                    <div class="msgbox-input" v-show="showInput">
                        <input v-model="inputValue" :placeholder="inputPlaceholder" />
                    </div>
                </div>

                <div class="msgbox-btns">
                    <button class="msgbox-btn msgbox-cancel" v-show="showCancelButton" @click="handleClose('cancel')">
                        {{ cancelButtonText }}
                    </button>
                    <button class="msgbox-btn msgbox-confirm" v-show="showConfirmButton" @click="handleClose('confirm')">
                        {{ confirmButtonText }}
                    </button>
                </div>
            </section>
        </transition>

        <base-modal
            :visible="visibleModal"
            @after-enter="handleAfterEnterModal"
            @after-leave="handleAfterLeaveModal">
        </base-modal>
    </div>
</template>

<script>
import BaseModal from '../modal/modal.vue'

export default {
    name: 'BaseMessage',

    data () {
        return {
            visible: false,
            visibleBox: false,
            visibleModal: false,

            /**
             * 可能值: cancel, confirm
             */
            action: '',
            /**
             * 可能值: alert, confirm, prompt
             */
            type: '',

            title: '',
            message: '',
            html: '',
            showConfirmButton: true,
            confirmButtonText: '确定',
            showCancelButton: false,
            cancelButtonText: '取消',
            /**
             * 输入框相关参数
             */
            showInput: false,
            inputValue: '',
            inputPlaceholder: '',
            inputValidator: null,

            callback: null,

            bodyOverflow: null
        }
    },

    watch: {
        visible (val) {
            if (val === true) {
                this.visibleModal = true
            }
            if (val === false) {
                this.visibleBox = false
            }
        }
    },

    methods: {
        handleClose (action) {
            if (typeof this.inputValidator === 'function' && action === 'confirm') {
                const isValid = this.inputValidator(this.inputValue)
                if (!isValid) return
            }
            this.action = action
            this.visible = false
        },
        destroyElement () {
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        },
        /**
         * 遮罩层动画钩子
         */
        handleAfterEnterModal (el) {
            this.visibleBox = true
        },
        handleAfterLeaveModal (el) {
            if (typeof this.callback === 'function') {
                this.callback(this.action)
            }
            this.destroyElement()
        },
        /**
         * 模态框动画钩子
         */
        handleAfterEnterBox (el) {
            this.$refs.msgbox.addEventListener('touchmove', function (event) {
                event.preventDefault()
                event.stopPropagation()
            })
        },
        handleAfterLeaveBox (el) {
            this.visibleModal = false
        }
    },

    mounted () {
    },

    components: {
        BaseModal
    }
}
</script>
