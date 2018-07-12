<template>
    <div class="dialog-wrapper">
        <base-modal
            :visible="visibleModal"
            @click="handleClickModal"
            @after-enter="handleAfterEnterModal"
            @after-leave="handleAfterLeaveModal">
        </base-modal>

        <transition name="dialog" @after-leave="handleAfterLeaveDialog">
            <div class="dialog" v-show="visibleDialog">
                <div class="dialog-content">
                    <div class="dialog-content__scrollable" v-smart-scroll>
                        <slot></slot>
                    </div>
                </div>

                <div class="dialog-footer">
                    <slot name="footer"></slot>
                </div>

                <div :class="`is-position-${closePosition}`" v-if="closePosition">
                    <div class="dialog__cancel" @click="handleClose"> × </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import BaseModal from '../modal/modal'

export default {
    name: 'BaseDialog',

    props: {
        visible: Boolean,
        /**
         * 可选值。top-right, top-left, bottom
         */
        closePosition: {
            type: String,
            default: ''
        },
        closeOnClickModal: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            visibleModal: false,
            visibleDialog: false
        }
    },

    watch: {
        visible (val) {
            if (val) {
                this.visibleModal = true
            } else {
                this.visibleDialog = false
            }
        }
    },

    methods: {
        close () {
            this.$emit('update:visible', false)
        },
        handleClose () {
            this.close()
        },
        handleClickModal () {
            if (this.closeOnClickModal) {
                this.close()
            }
        },
        /**
         * 模态框动画钩子
         */
        handleAfterEnterModal () {
            this.visibleDialog = true
        },
        handleAfterLeaveModal () {
            this.$emit('close')
        },
        /**
         * dialog 动画钩子
         */
        handleAfterLeaveDialog () {
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
