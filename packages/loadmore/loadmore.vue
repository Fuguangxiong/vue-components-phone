<template>
    <div class="v-loadmore" :style="styles">
        <div class="v-loadmore-content">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'BaseLoadmore',

    data () {
        return {
            distance: 0,

            height: 0,
            disableTransition: false
        }
    },

    computed: {
        styles () {
            return {
                height: `${this.height}px`,
                transition: this.disableTransition ? '' : `height .3s`
            }
        },
        text () {
            return this.height > this.distance ? '松开刷新' : '下拉刷新'
        }
    },

    methods: {
        updateHeight (height, disableTransition) {
            this.disableTransition = disableTransition
            this.height = height
        }
    }
}
</script>
