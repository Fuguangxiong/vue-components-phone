<template>
    <app-view-box title="button demo">
        <base-button icon="success">default</base-button>
        <base-button icon="success" type="success" bold></base-button>
        <base-button icon="error" type="danger" round></base-button>
        <base-button icon="warning" type="warning" circle></base-button>

        <base-divider>渐变</base-divider>
        <base-button :gradients="['#FF8900', '#FF5300', '#fff']" round bold block>渐变测试</base-button>

        <base-divider>状态</base-divider>
        <base-button loading>loading</base-button>
        <base-button disabled>disabled</base-button>

        <base-divider>占整行 block</base-divider>
        <base-button block>default</base-button>
        <base-button type="primary" block>primary</base-button>
        <base-button type="success" block>success</base-button>
        <base-button type="info" block>info</base-button>
        <base-button type="warning" block>warning</base-button>
        <base-button type="danger" block>danger</base-button>

        <base-divider>朴素元素 plain</base-divider>
        <base-button plain>default</base-button>
        <base-button type="primary" plain>primary</base-button>
        <base-button type="success" plain>success</base-button>
        <base-button type="info" plain>info</base-button>
        <base-button type="warning" plain>warning</base-button>
        <base-button type="danger" plain>danger</base-button>

        <base-divider>圆角按钮 round</base-divider>
        <base-button round>default</base-button>
        <base-button type="primary" round>primary</base-button>
        <base-button type="success" round>success</base-button>
        <base-button type="info" round>info</base-button>
        <base-button type="warning" round>warning</base-button>
        <base-button type="danger" round>danger</base-button>
    </app-view-box>
</template>

<script>
export default {
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>
