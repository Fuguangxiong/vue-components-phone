export default [
    {
        path: 'dialog',
        name: 'dialog',
        meta: { title: 'dialog document' },
        component: r => require(['@/views/dialog/document'], r)
    },
    {
        path: 'dialog/demo',
        name: 'dialogDemo',
        meta: { title: 'dialog demo' },
        component: r => require(['@/views/dialog/demo'], r)
    }
]
