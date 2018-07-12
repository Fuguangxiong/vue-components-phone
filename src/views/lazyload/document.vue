<template>
    <app-view-box title="lazyload" :to="{ name: 'lazyloadDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel title="参数为String时，作为image">
            <base-panel-item
                title="image"
                subtitle="{String}"
                description="要加载的图片地址"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="loading"
                subtitle="{String}"
                description="自定义loading图片"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="distance"
                subtitle="{Number}"
                description="距离底部多少px时触发加载事件"
                value="10">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<img v-lazyload="img" />'
            ]
        }
    }
}
</script>
