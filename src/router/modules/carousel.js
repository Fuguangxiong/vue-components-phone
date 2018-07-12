export default [
    {
        path: 'carousel',
        name: 'carousel',
        meta: { title: 'carousel document' },
        component: r => require(['@/views/carousel/document'], r)
    },
    {
        path: 'carousel/demo',
        name: 'carouselDemo',
        meta: { title: 'carousel demo' },
        component: r => require(['@/views/carousel/demo'], r)
    }
]
