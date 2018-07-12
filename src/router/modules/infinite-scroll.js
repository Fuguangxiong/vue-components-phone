export default [
    {
        path: 'infinite-scroll',
        name: 'infiniteScroll',
        meta: { title: '无限滚动 document' },
        component: r => require(['@/views/infinite-scroll/document'], r)
    },
    {
        path: 'infinite-scroll/demo',
        name: 'infiniteScrollDemo',
        meta: { title: '无限滚动 demo' },
        component: r => require(['@/views/infinite-scroll/demo'], r)
    }
]
