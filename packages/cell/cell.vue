<template>
    <section class="t-cell" @click="handleClick">
        <div class="t-cell-icon" v-if="icon || $slots.icon">
            <slot name="icon">
                <base-icon :icon="icon"></base-icon>
            </slot>
        </div>

        <div class="t-cell-label text-ellipsis">
            <slot name="label"> {{ label }} </slot>
        </div>

        <div class="t-cell-value text-ellipsis" v-if="value || $slots.default">
            <slot> {{ value }} </slot>
        </div>

        <div class="t-cell-link" v-if="isLink"></div>
    </section>
</template>

<script>
import BaseIcon from '../icon/icon.js'

export default {
    name: 'BaseCell',

    props: {
        icon: {
            type: String
        },
        label: {
            type: String
        },
        value: {},
        /**
         * vue-router 的路由参数
         */
        to: {},
        /**
         * 显示箭头
         */
        isLink: {
            type: Boolean,
            default: false
        }
    },

    computed: {
    },

    methods: {
        handleClick () {
            if (this.$router && this.to) {
                this.$router.push(this.to)
            }
        }
    },

    components: {
        BaseIcon
    }
}
</script>
