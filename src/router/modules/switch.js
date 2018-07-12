export default [
    {
        path: 'switch',
        name: 'switch',
        meta: { title: 'switch document' },
        component: r => require(['@/views/switch/document'], r)
    },
    {
        path: 'switch/demo',
        name: 'switchDemo',
        meta: { title: 'switch demo' },
        component: r => require(['@/views/switch/demo'], r)
    }
]
