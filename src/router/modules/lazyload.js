export default [
    {
        path: 'lazyload',
        name: 'lazyload',
        meta: { title: 'lazyload' },
        component: r => require(['@/views/lazyload/document'], r)
    },
    {
        path: 'lazyload/demo',
        name: 'lazyloadDemo',
        meta: { title: 'lazyload demo' },
        component: r => require(['@/views/lazyload/demo'], r)
    }
]
