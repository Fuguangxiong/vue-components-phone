export default [
    {
        path: 'anchor',
        name: 'anchor',
        meta: { title: '锚点 document' },
        component: r => require(['@/views/anchor/document'], r)
    },
    {
        path: 'anchor/demo',
        name: 'anchorDemo',
        meta: { title: '锚点 demo' },
        component: r => require(['@/views/anchor/demo'], r)
    }
]
