export default [
    {
        path: 'checkbox',
        name: 'checkbox',
        meta: { title: 'checkbox document' },
        component: r => require(['@/views/checkbox/document'], r)
    },
    {
        path: 'checkbox/demo',
        name: 'checkboxDemo',
        meta: { title: 'checkbox demo' },
        component: r => require(['@/views/checkbox/demo'], r)
    }
]
