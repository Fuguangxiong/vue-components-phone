import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let childRoutes = []
const routeContext = require.context('./modules', false, /\.js$/)

routeContext.keys().forEach(routePath => {
    const routeModule = routeContext(routePath).default
    childRoutes = childRoutes.concat(routeModule)
})

const rootRoute = [
    {
        path: '/',
        name: 'app',
        redirect: '/navigation'
    },
    {
        path: '/navigation',
        name: 'navigation',
        meta: { title: '导航' },
        component: r => require(['@/pages/navigation/navigation'], r)
    },
    {
        path: '/component',
        name: 'component',
        meta: { title: '组件' },
        component: r => require(['@/pages/component/component'], r),
        children: childRoutes
    }
]

const router = new VueRouter({
    // mode: 'history',
    routes: rootRoute
})

router.beforeEach((to, from, next) => {
    // 设置文档标题
    const title = to.meta && to.meta.title
    document.title = title || '移动端组件'

    next()
})

export default router
