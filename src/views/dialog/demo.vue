<template>
    <app-view-box title="dialog">
        <base-button @click="visibleDialog = true" block>open</base-button>

        <base-dialog :visible.sync="visibleDialog" :close-on-click-modal="false" @close="handleClose">
            <div class="content">
                <img src="/static/images/dengken.jpg" alt="" class="image" />
                <pre style="height: 200vh;"></pre>
                here
            </div>

            <base-button slot="footer" type="primary" @click="visibleDialog = false" block>确认</base-button>
        </base-dialog>

        <pre style="height: 100vh;"></pre>
        123
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            visibleDialog: false
        }
    },

    methods: {
        handleClose () {
            this.$toast('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    height: 200px;
    // background: #fff;
    // border-radius: 8px;
    overflow: auto;
    // -webkit-overflow-scrolling: touch;
}

.image {
    display: block;
    width: 100%;
    border: none;
}
</style>
