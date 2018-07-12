// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import customComponents from 'packages'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import AppViewBox from './components/ViewBox'

Vue.use(customComponents)
// Vue.use(MintUI)
Vue.component(AppViewBox.name, AppViewBox)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
