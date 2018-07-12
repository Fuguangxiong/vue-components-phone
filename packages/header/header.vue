<template>
    <header class="t-header">
        <div class="t-header-left">
            <slot name="left"></slot>
        </div>

        <div class="t-header-title">
            <slot>{{ title }}</slot>
        </div>

        <div class="t-header-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
export default {
    name: 'BaseHeader',

    props: {
        title: String
    }
}
</script>
