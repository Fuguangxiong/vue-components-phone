<template>
    <button class="v-button" :class="classes" :style="styles" :disabled="normalizedDisabled" @click="handleClick" :type="nativeType">
        <base-icon :icon="normalizedIcon" v-if="normalizedIcon"></base-icon>
        <span v-if="$slots.default"> <slot></slot> </span>
    </button>
</template>

<script>
import BaseIcon from '../icon/icon.js'

export default {
    name: 'BaseButton',

    props: {
        /**
         * 可选值。default, primary, success, info, warning, danger, text
         */
        type: {
            type: String,
            default: 'default'
        },
        plain: Boolean,
        bold: Boolean,
        round: Boolean,
        circle: Boolean,

        loading: Boolean,
        disabled: Boolean,
        block: Boolean,

        icon: {
            type: String,
            default: ''
        },

        /**
         * 渐变背景色，从左到右。参数依次为 left, right, color
         */
        gradients: {
            type: Array
        },

        nativeType: {
            type: String,
            default: 'button'
        }
    },

    computed: {
        classes () {
            return {
                'is-disabled': this.normalizedDisabled,
                'is-block': this.block,
                'is-plain': this.plain,
                'is-bold': this.bold,
                'is-round': this.round,
                'is-circle': this.circle,
                [`v-button--${this.type}`]: true
            }
        },
        styles () {
            const styles = {}

            if (this.gradients) {
                const [left, right, color] = this.gradients
                styles.background = `linear-gradient(to right, ${left}, ${right})`
                styles.color = color
                styles.border = 'none'
            }

            return styles
        },
        normalizedIcon () {
            if (this.loading) {
                return 'loading'
            }
            return this.icon
        },
        normalizedDisabled () {
            return this.disabled || this.loading
        }
    },

    methods: {
        handleClick () {
            this.$emit('click')
        }
    },

    components: {
        BaseIcon
    }
}
</script>
