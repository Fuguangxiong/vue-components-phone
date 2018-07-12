<template>
    <div class="page" v-loadmore="handleLoadmore">
        <div class="loadmore" v-for="item in 30" :key="item">{{ item }}</div>
    </div>
</template>

<script>
export default {
    methods: {
        handleLoadmore (done) {
            setTimeout(done, 3000)
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}

.loadmore {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
</style>
