<template>
    <div class="page-group">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',

    data () {
        return {
            transitionName: 'to-left'
        }
    },

    watch: {
        // '$route' (to, from) {
        //     const toDepth = to.path.split('/').length
        //     const fromDepth = from.path.split('/').length
        //     this.transitionName = toDepth < fromDepth ? 'to-right' : 'to-left'
        // }
    },

    methods: {
    },

    mounted () {
        // const scale = 1 / devicePixelRatio

        // document
        //     .querySelector('meta[name="viewport"]')
        //     .setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')

        // document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
    }
}
</script>

<style>
body, html {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 26px;
}

.page-group {
    height: 100%;
}

.to-left-enter-active,
.to-left-leave-active,
.to-right-enter-active,
.to-right-leave-active {
    transition: all .5s cubic-bezier(.55,0,.1,1);
}

.to-left-enter,
.to-right-leave-to {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}

.to-left-leave-to,
.to-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>
