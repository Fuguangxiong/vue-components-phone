<template>
    <div class="page-navigation">
        <base-divider>指令</base-divider>

        <base-cell icon="anchor" label="anchor" :to="{ name: 'anchor' }" is-link></base-cell>
        <base-cell icon="images" label="image-combine" :to="{ name: 'imageCombine' }" is-link></base-cell>
        <base-cell icon="infinite" label="infinite-scroll" :to="{ name: 'infiniteScrollDemo' }" is-link></base-cell>
        <base-cell icon="sticky" label="sticky" :to="{ name: 'sticky' }" is-link></base-cell>
        <base-cell icon="sticky" label="lazyload" :to="{ name: 'lazyload' }" is-link></base-cell>

        <base-divider>js 组件</base-divider>

        <base-cell icon="calendar" label="calendar" :to="{ name: 'calendar' }" is-link></base-cell>
        <base-cell icon="swiper" label="carousel" :to="{ name: 'carousel' }" is-link></base-cell>

        <base-divider>css 组件</base-divider>

        <base-cell icon="wrapper" label="view box" :to="{ name: 'viewBox' }" is-link></base-cell>
        <base-cell icon="row" label="row" :to="{ name: 'row' }" is-link></base-cell>
        <base-cell icon="badge" label="badge" :to="{ name: 'badge' }" is-link></base-cell>
        <base-cell icon="button" label="button" :to="{ name: 'button' }" is-link></base-cell>
        <base-cell icon="card" label="card" :to="{ name: 'card' }" is-link></base-cell>
        <base-cell icon="cell" label="cell" :to="{ name: 'cell' }" is-link></base-cell>
        <base-cell icon="divider" label="divider" :to="{ name: 'divider' }" is-link></base-cell>
        <base-cell icon="header" label="header" :to="{ name: 'header' }" is-link></base-cell>
        <base-cell icon="panel" label="panel" :to="{ name: 'panel' }" is-link></base-cell>
        <base-cell icon="tab" label="tab" :to="{ name: 'tab' }" is-link></base-cell>
        <base-cell icon="tab" label="icon" :to="{ name: 'icon' }" is-link></base-cell>

        <base-divider>弹窗</base-divider>

        <base-cell icon="dialog" label="dialog" :to="{ name: 'dialog' }" is-link></base-cell>
        <base-cell icon="picker" label="picker" :to="{ name: 'picker' }" is-link></base-cell>
        <base-cell icon="popup" label="popup" :to="{ name: 'popup' }" is-link></base-cell>
        <base-cell icon="actionsheet" label="actionsheet" :to="{ name: 'actionsheet' }" is-link></base-cell>
        <base-cell icon="date" label="datepicker" :to="{ name: 'datepicker' }" is-link></base-cell>
        <base-cell icon="toast" label="toast" :to="{ name: 'toast' }" is-link></base-cell>
        <base-cell icon="message" label="message" :to="{ name: 'message' }" is-link></base-cell>
        <base-cell icon="load" label="loading" :to="{ name: 'loading' }" is-link></base-cell>

        <base-divider>表单</base-divider>

        <base-cell icon="field" label="field" :to="{ name: 'field' }" is-link></base-cell>
        <base-cell icon="checkbox" label="checkbox" :to="{ name: 'checkbox' }" is-link></base-cell>
        <base-cell icon="radio" label="radio" :to="{ name: 'radio' }" is-link></base-cell>
        <base-cell icon="switch" label="switch" :to="{ name: 'switch' }" is-link></base-cell>

        <base-divider>效果测试页面</base-divider>

        <base-cell icon="switch" label="测试" :to="{ name: 'test' }"></base-cell>
    </div>
</template>

<style lang="scss" scoped>
.page-navigation {
    background: #f6f6f6;
}
</style>
