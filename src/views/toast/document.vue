<template>
    <app-view-box title="toast" :to="{ name: 'toastDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel title="该组件为: 指令">
            <base-panel-item
                title="message"
                subtitle="{Message}"
                description="显示文本"
                value="---">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                'this.$toast(\'hello\')',
                'this.$toast.success(\'hello\')',
                'this.$toast.error(\'hello\')',
                'this.$toast.warning(\'hello\')'
            ]
        }
    }
}
</script>
