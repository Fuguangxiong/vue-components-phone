export default [
    {
        path: 'view-box',
        name: 'viewBox',
        meta: { title: '页面容器 document' },
        component: r => require(['@/views/view-box/document'], r)
    },
    {
        path: 'view-box/demo',
        name: 'viewBoxDemo',
        meta: { title: '页面容器 demo' },
        component: r => require(['@/views/view-box/demo'], r)
    }
]
