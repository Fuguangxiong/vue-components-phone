<template>
    <base-view-box>
        <base-header :title="title" slot="header">
            <base-button type="text" icon="left" @click="$router.go(-1)" slot="left">返回</base-button>

            <base-button type="text" slot="right" @click="$router.push(to)" v-if="to">
                <span>demo</span>
                <base-icon icon="right" style="margin-left: 5px;"></base-icon>
            </base-button>
        </base-header>

        <div class="content">
            <template v-if="code">
                <base-divider>基础用发</base-divider>
                <code v-if="code instanceof Array" v-for="(item, index) in code" :key="index">{{ item }}</code>
                <code v-else>{{ code }}</code>
            </template>

            <slot></slot>
        </div>

        <div slot="fixed" v-if="$slots.fixed">
            <slot name="fixed"></slot>
        </div>
    </base-view-box>
</template>

<script>
export default {
    name: 'AppViewBox',

    props: {
        title: {},
        /**
         * 不存在，认为是 demo 文件，demo就不显示 header 右边按钮
         */
        to: {},
        /**
         * 代码展示
         */
        code: [String, Array]
    }
}
</script>

<style lang="scss" scoped>
.content {
    min-height: 100%;
    padding: 10px 0;
    background: #f6f6f6;
    box-sizing: border-box;
}

code {
    display: block;
    padding: 5px 20px;
    background: #fff;
}
</style>
