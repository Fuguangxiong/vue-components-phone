<template>
    <app-view-box title="popup" :to="{ name: 'popupDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="visible"
                subtitle="{Boolean}"
                description="是否可见。双向绑定。内部会修改值"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="width"
                subtitle="{String}"
                description="width值。设置显示宽度"
                value="80%">
            </base-panel-item>

            <base-panel-item
                title="height"
                subtitle="{String}"
                description="height值。设置显示高度"
                value="auto">
            </base-panel-item>

            <base-panel-item
                title="position"
                subtitle="{enum} top, bottom, left, right"
                description="显示位置"
                value="bottom">
            </base-panel-item>

            <base-panel-item
                title="close-on-click-modal"
                subtitle="{Boolean}"
                description="点击模态框是否关闭"
                value="true">
            </base-panel-item>

            <base-panel-item
                title="transparent"
                subtitle="{Boolean}"
                description="背景是否透明"
                value="true">
            </base-panel-item>
        </base-panel>

        <base-divider>事件</base-divider>

        <base-panel>
            <base-panel-item
                title="open"
                description="打开后触发">
            </base-panel-item>

            <base-panel-item
                title="close"
                description="关闭后触发">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-popup :visible.sync="visible"><slot /></base-popup>'
            ]
        }
    }
}
</script>
