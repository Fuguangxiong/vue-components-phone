<template>
    <app-view-box title="actionsheet demo">
        <base-button @click="actionsheet('取消')" block>默认</base-button>
        <base-button @click="actionsheet('')" block>不带取消按钮</base-button>
    </app-view-box>
</template>

<script>
export default {
    methods: {
        actionsheet (cancelText) {
            const menus = [
                { label: 'label - 1', value: 'value - 1' },
                { label: 'label - 2', value: 'value - 2' }
            ]
            this.$actionsheet({ menus, cancelText, closeOnClickModal: true })
                .then(value => {
                    const clicked = menus.find(item => item.value === value)
                    this.$toast(clicked.label)
                })
                .catch(value => {
                    this.$toast('取消')
                })
        }
    }
}
</script>
