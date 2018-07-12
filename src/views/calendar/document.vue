<template>
    <app-view-box title="calendar" :to="{ name: 'calendarDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="events"
                subtitle="{Array<Object>} date（例2018-06-08），sign（primary, warning）标记状态"
                description="需要标记的日期。该对象会包含在点击对应日期事件参数对象中"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="value"
                subtitle="{Date}"
                description="当前选中日期"
                value="new Date()">
            </base-panel-item>

            <base-panel-item
                title="start"
                subtitle="{Date}"
                description="限制开始日期"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="end"
                subtitle="{Date}"
                description="限制结束日期"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="header-color"
                subtitle="color属性"
                description="自定义顶部字体颜色"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="week-color"
                subtitle="color属性"
                description="自定义星期字体颜色"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="date-color"
                subtitle="color属性"
                description="自定义日期字体颜色"
                value="---">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<BaseDatepicker v-model="value" :events="events" />'
            ]
        }
    }
}
</script>
