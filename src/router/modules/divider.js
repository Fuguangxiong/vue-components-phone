export default [
    {
        path: 'divider',
        name: 'divider',
        meta: { title: 'divider document' },
        component: r => require(['@/views/divider/document'], r)
    },
    {
        path: 'divider/demo',
        name: 'dividerDemo',
        meta: { title: 'divider demo' },
        component: r => require(['@/views/divider/demo'], r)
    }
]
