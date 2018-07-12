<template>
    <div class="t-actions">
        <transition name="slide-in-bottom" @after-leave="handleAfterLeaveActions">
            <div class="t-actions-content" v-show="visibleActions">
                <div class="t-actions-content-menus" v-for="item in menus" :key="item.value" @click="handleClickMenu(item.value)">{{ item.label }}</div>
                <div class="t-actions-content-menus t-cancel" v-if="cancelText" @click="handleClickMenu('')">{{ cancelText }}</div>
            </div>
        </transition>

        <base-modal
            :visible="visibleModal"
            @click="handleClickModal"
            @after-enter="handleAfterEnterModal"
            @after-leave="handleAfterLeaveModal">
        </base-modal>
    </div>
</template>

<script>
import BaseModal from '../modal/modal.vue'

export default {
    name: 'BaseActionsheet',

    data () {
        return {
            visible: false,
            visibleModal: false,
            visibleActions: false,

            menus: [],
            actionValue: '',
            cancelText: '取消',
            closeOnClickModal: false,
            callback: null
        }
    },

    watch: {
        visible (val) {
            if (val) { // 打开
                this.visibleModal = true
            } else { // 关闭
                this.visibleActions = false
            }
        }
    },

    methods: {
        handleClickMenu (value) {
            this.actionValue = value
            this.visible = false
        },
        handleClickModal () {
            if (this.closeOnClickModal) {
                this.visible = false
            }
        },
        destroyElement () {
            this.$destroy()
            this.$el.parentNode.removeChild(this.$el)
        },
        triggerCallback () {
            if (typeof this.callback === 'function') {
                this.callback(this.actionValue)
                this.actionValue = ''
            }
        },
        /**
         * 模态框动画钩子
         */
        handleAfterEnterModal () {
            this.visibleActions = true
        },
        handleAfterLeaveModal () {
            this.triggerCallback()
            this.destroyElement()
        },
        /**
         * actionsheet 动画钩子
         */
        handleAfterLeaveActions () {
            this.visibleModal = false
        }
    },

    components: {
        BaseModal
    }
}
</script>
