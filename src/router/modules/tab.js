export default [
    {
        path: 'tab',
        name: 'tab',
        meta: { title: 'tab document' },
        component: r => require(['@/views/tab/document'], r)
    },
    {
        path: 'tab/demo',
        name: 'tabDemo',
        meta: { title: 'tab demo' },
        component: r => require(['@/views/tab/demo'], r)
    }
]
