export default [
    {
        path: 'icon',
        name: 'icon',
        meta: { title: 'icon' },
        component: r => require(['@/views/icon/document'], r)
    },
    {
        path: 'icon/demo',
        name: 'iconDemo',
        meta: { title: 'icon demo' },
        component: r => require(['@/views/icon/demo'], r)
    }
]
