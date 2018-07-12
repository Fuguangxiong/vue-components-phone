<template>
    <app-view-box title="lazyload demo">
        <base-divider>分隔</base-divider>
        <div style="height: 100vh;"></div>
        <img v-lazyload="img" width="200" height="200" id="image" />
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            img: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg',
            src: ''
        }
    }
}
</script>
