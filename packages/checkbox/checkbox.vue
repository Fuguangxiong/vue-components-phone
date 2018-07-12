<template>
    <div class="checkbox">
        <div class="checkbox-header">
            {{ title }}
        </div>

        <div class="checkbox-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseCheckbox',

    props: {
        title: String,
        value: Array,
        max: {
            type: Number,
            default: 0
        }
    },

    data () {
        return {
        }
    },

    computed: {
    },

    watch: {
    },

    methods: {
    },

    created () {
    }
}
</script>
