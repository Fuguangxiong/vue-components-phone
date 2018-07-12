export default [
    {
        path: 'actionsheet',
        name: 'actionsheet',
        meta: { title: 'actionsheet' },
        component: r => require(['@/views/actionsheet/document'], r)
    },
    {
        path: 'actionsheet/demo',
        name: 'actionsheetDemo',
        meta: { title: 'demo actionsheet' },
        component: r => require(['@/views/actionsheet/demo'], r)
    }
]
