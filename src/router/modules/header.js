export default [
    {
        path: 'header',
        name: 'header',
        meta: { title: 'header document' },
        component: r => require(['@/views/header/document'], r)
    },
    {
        path: 'header/demo',
        name: 'headerDemo',
        meta: { title: 'header demo' },
        component: r => require(['@/views/header/demo'], r)
    }
]
