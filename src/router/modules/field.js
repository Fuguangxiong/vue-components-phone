export default [
    {
        path: 'field',
        name: 'field',
        meta: { title: 'field document' },
        component: r => require(['@/views/field/document'], r)
    },
    {
        path: 'field/demo',
        name: 'fieldDemo',
        meta: { title: 'field demo' },
        component: r => require(['@/views/field/demo'], r)
    }
]
