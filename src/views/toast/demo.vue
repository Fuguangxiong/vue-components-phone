<template>
    <app-view-box title="toast demo">
        <base-button @click="$toast('hello world')" block>normal</base-button>
        <base-button @click="$toast('很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字')" block>长文字</base-button>
        <base-button @click="$toast.success('hello world')" block>success</base-button>
        <base-button @click="$toast.error('hello world')" block>error</base-button>
        <base-button @click="$toast.warning('hello world')" block>warning</base-button>
    </app-view-box>
</template>

<script>
export default {
    methods: {
    }
}
</script>
