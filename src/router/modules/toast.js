export default [
    {
        path: 'toast',
        name: 'toast',
        meta: { title: '消息通知 document' },
        component: r => require(['@/views/toast/document'], r)
    },
    {
        path: 'toast/demo',
        name: 'toastDemo',
        meta: { title: '消息通知 demo' },
        component: r => require(['@/views/toast/demo'], r)
    }
]
