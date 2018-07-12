<template>
    <app-view-box title="view-box" :to="{ name: 'viewBoxDemo' }" :code="code">
        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="内容区域，可滚动">
            </base-panel-item>

            <base-panel-item
                title="header"
                description="顶部固定区域">
            </base-panel-item>

            <base-panel-item
                title="footer"
                description="底部固定区域">
            </base-panel-item>

            <base-panel-item
                title="fixed"
                description="独立的元素。建议放一些绝对定位元素">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-view-box><slot /></base-view-box>'
            ]
        }
    }
}
</script>
