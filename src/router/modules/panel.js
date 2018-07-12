export default [
    {
        path: 'panel',
        name: 'panel',
        meta: { title: 'panel document' },
        component: r => require(['@/views/panel/document'], r)
    },
    {
        path: 'panel/demo',
        name: 'panelDemo',
        meta: { title: 'panel demo' },
        component: r => require(['@/views/panel/demo'], r)
    }
]
