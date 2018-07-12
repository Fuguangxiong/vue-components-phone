<template>
    <app-view-box title="dialog" :to="{ name: 'dialogDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="visible"
                subtitle="{Boolean}"
                description="是否显示。该值为双向绑定。内部会改变值"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="close-position"
                subtitle="{enum} top-right, top-left, bottom"
                description="关闭按钮的位置。空则不显示"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="close-on-click-modal"
                subtitle="{Boolean}"
                description="点击模态框是否关闭"
                value="false">
            </base-panel-item>
        </base-panel>

        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="显示内容">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-dialog :visible.sync="visible"><slot /></base-dialog>'
            ]
        }
    }
}
</script>
