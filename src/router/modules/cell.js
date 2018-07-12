export default [
    {
        path: 'cell',
        name: 'cell',
        meta: { title: '单元格 document' },
        component: r => require(['@/views/cell/document'], r)
    },
    {
        path: 'cell/demo',
        name: 'cellDemo',
        meta: { title: '单元格 demo' },
        component: r => require(['@/views/cell/demo'], r)
    }
]
