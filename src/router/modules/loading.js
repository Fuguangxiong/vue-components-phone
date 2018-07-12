export default [
    {
        path: 'loading',
        name: 'loading',
        meta: { title: '加载状态 document' },
        component: r => require(['@/views/loading/document'], r)
    },
    {
        path: 'loading/demo',
        name: 'loadingDemo',
        meta: { title: '加载状态 demo' },
        component: r => require(['@/views/loading/demo'], r)
    }
]
