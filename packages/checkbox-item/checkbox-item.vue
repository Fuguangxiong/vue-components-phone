<template>
    <label class="checkbox-item" :class="normalizedDisabled ? 'is-disabled' : ''">
        <input class="checkbox-item-input"
            type="checkbox"
            v-model="currentValue"
            :value="checked"
            :disabled="normalizedDisabled" />

        <div class="checkbox-item-label">
            <slot></slot>
        </div>

        <span class="checkbox-item-icon" v-show="isSelected">
            ✔︎︎
        </span>
    </label>
</template>

<script>
export default {
    name: 'BaseCheckboxItem',

    props: {
        checked: {},
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
        }
    },

    computed: {
        max () {
            return this.$parent.max || Infinity
        },
        isSelected () {
            return this.currentValue.indexOf(this.checked) > -1
        },
        limitMessage () {
            if (this.currentValue.length >= this.max) {
                return 'over-max'
            }
            return ''
        },
        normalizedDisabled () {
            return this.disabled || (!!this.limitMessage && !this.isSelected)
        },
        currentValue: {
            get () {
                return this.$parent.value
            },
            set (val) {
                this.$parent.$emit('input', val)
                this.$parent.$emit('change', val)
            }
        }
    },

    methods: {
    }
}
</script>
