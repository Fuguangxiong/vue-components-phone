<template>
    <app-view-box title="锚点 demo">
        <base-button v-anchor="{ selector: '#target', step: 50 }" block>锚点</base-button>

        <pre style="height: 120vh;"></pre>

        <base-divider id="target">看到我啦</base-divider>

        <pre style="height: 120vh;"></pre>
    </app-view-box>
</template>
