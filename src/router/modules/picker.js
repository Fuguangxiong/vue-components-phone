export default [
    {
        path: 'picker',
        name: 'picker',
        meta: { title: 'picker document' },
        component: r => require(['@/views/picker/document'], r)
    },
    {
        path: 'picker/demo',
        name: 'pickerDemo',
        meta: { title: 'picker demo' },
        component: r => require(['@/views/picker/demo'], r)
    }
]
