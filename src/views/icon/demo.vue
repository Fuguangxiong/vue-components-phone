<template>
    <app-view-box title="icon demo">
        <div class="content">
            <!-- <base-icon icon="success"></base-icon>
            <base-icon icon="warning"></base-icon>
            <base-icon icon="error"></base-icon>
            <div style="font-size: 18px;height: 36px; line-height: 36px;">
                <base-icon icon="icon-score-1"></base-icon>
            </div>
            <base-icon icon="icon-score-5"></base-icon>
            <base-icon icon="score-underline"></base-icon> -->
            <!-- <div class="arrow">
                <base-icon icon="arrow-down-double"></base-icon>
            </div> -->
            <i class="iconfont">&#xe61a;</i>
            <i class="iconfont">&#xe616;</i>
            <i class="iconfont">&#xe615;</i>
            <div>测试</div>
        </div>
    </app-view-box>
</template>

<style lang="scss" scoped>
.content {
    padding: 50px;
}

i {
    font-size: 20px;
}

.arrow {
    position: relative;
    animation: arrow 1s infinite;
    animation-direction: alternate;
}

@keyframes arrow {
    from {
        top: 0;
        opacity: 0;
    }
    to {
        top: 20px;
        opacity: 1;
    }
}
</style>
