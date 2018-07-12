<template>
    <app-view-box title="icon" :to="{ name: 'iconDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="icon"
                subtitle="{String}"
                description="图标"
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
                '<BaseIcon icon="icon" />'
            ]
        }
    }
}
</script>
