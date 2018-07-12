<template>
    <app-view-box title="view-box demo">
        <base-view-box>
            <div slot="header">
                <base-header title="标题"></base-header>
                <!-- <div style="margin-top: 30px;">我是 header 内的元素</div> -->
            </div>

            <base-divider>开始</base-divider>
            <div v-for="item in 100" :key="item">{{ item }}</div>
            <base-divider>结束</base-divider>

            <div slot="footer">
                <base-header title="标题"></base-header>
            </div>

            <div class="test-absolute" style="top: 100px;" slot="fixed">
                这是一个 absolute 定位元素
            </div>

            <div class="test-absolute" style="top: 200px;" slot="fixed">
                这是一个 absolute 定位元素
            </div>
        </base-view-box>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            test: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    height: 500px;
}

.test-absolute {
    position: absolute;
    top: 100px;
    // top: 0;
    // bottom: 0;
    left: 0;
    color: pink;
    z-index: 9999;
}
</style>
