export default [
    {
        path: 'calendar',
        name: 'calendar',
        meta: { title: '日历 document' },
        component: r => require(['@/views/calendar/document'], r)
    },
    {
        path: 'calendar/demo',
        name: 'calendarDemo',
        meta: { title: '日历 demo' },
        component: r => require(['@/views/calendar/demo'], r)
    }
]
