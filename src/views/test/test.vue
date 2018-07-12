<template>
    <base-view-box>
        <div class="container" ref="container"></div>
    </base-view-box>
</template>

<script>
import draw from './test.js'

export default {
    data () {
        return {
        }
    },

    methods: {
    },

    mounted () {
        draw()
            .then(canvas => {
                this.$refs.container.appendChild(canvas)
            })
    }
}
</script>

<style lang="scss" scoped>

</style>
