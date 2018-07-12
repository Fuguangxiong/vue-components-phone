<template>
    <app-view-box title="button" :to="{ name: 'buttonDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="type"
                subtitle="{enum} default, primary, success, info, warning, danger, text"
                description="类型"
                value="default">
            </base-panel-item>

            <base-panel-item
                title="plain"
                subtitle="{Boolean}"
                description="是否朴素元素"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="bold"
                subtitle="{Boolean}"
                description="文本是否加粗"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="round"
                subtitle="{Boolean}"
                description="是否圆角按钮"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="circle"
                subtitle="{Boolean}"
                description="是否圆形按钮"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="loading"
                subtitle="{Boolean}"
                description="加载状态"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="disabled"
                subtitle="{Boolean}"
                description="禁用状态"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="block"
                subtitle="{Boolean}"
                description="显示为块状，width铺满"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="icon"
                subtitle="{String}"
                description="图标"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="gradients"
                subtitle="{Array}"
                description="渐变色，从左（index = 0）到右（index = 1）显示。第三个元素（index = 2）作为字体颜色"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="native-type"
                subtitle="{String}"
                description="原生type属性"
                value="button">
            </base-panel-item>
        </base-panel>

        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="显示文本">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-button icon="icon-success">default</base-button>'
            ]
        }
    }
}
</script>
