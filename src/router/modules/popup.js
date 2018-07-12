export default [
    {
        path: 'popup',
        name: 'popup',
        meta: { title: 'popup document' },
        component: r => require(['@/views/popup/document'], r)
    },
    {
        path: 'popup/demo',
        name: 'popupDemo',
        meta: { title: 'popup demo' },
        component: r => require(['@/views/popup/demo'], r)
    }
]
