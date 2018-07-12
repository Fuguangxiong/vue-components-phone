<template>
    <div class="view-box">
        <div class="view-box-header" ref="header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>

        <div class="view-box-content" v-smart-scroll>
            <slot></slot>
        </div>

        <div class="view-box-footer" ref="footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>

        <!-- 这个节点存在的原因是: -webkit-overflow-scrolling 中，绝对定位可能出现异常 -->
        <slot name="fixed"></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseViewBox',

    methods: {
        handleTouchmove (event) {
        }
    }
}
</script>
