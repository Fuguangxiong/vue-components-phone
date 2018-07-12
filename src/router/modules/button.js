export default [
    {
        path: 'button',
        name: 'button',
        meta: { title: '按钮 document' },
        component: r => require(['@/views/button/document'], r)
    },
    {
        path: 'button/demo',
        name: 'buttonDemo',
        meta: { title: '按钮 demo' },
        component: r => require(['@/views/button/demo'], r)
    }
]
