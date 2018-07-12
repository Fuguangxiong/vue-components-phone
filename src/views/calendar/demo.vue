<template>
    <app-view-box title="calendar demo">
        <base-calendar
            header-color="#ff629a"
            week-color="#ff629a"
            date-color="#88d2ac"
            v-model="calendarDate"
            :events="events"
            :start="start"
            :end="end"
            @date-click="handleDateClick"
            @day-click="handleDayClick">
        </base-calendar>

        <base-datepicker
            :visible.sync="visiblePopup"
            v-model="selectDate"
            :start="start"
            :end="end"
            @change="handleDateChange">
        </base-datepicker>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            visiblePopup: false,
            calendarDate: new Date(),
            selectDate: new Date(),
            start: new Date(2018, 4),
            end: new Date(2018, 6),

            events: [
                { date: '2018-06-05', sign: 'primary' }
            ]
        }
    },

    watch: {
        selectDate (val) {
            console.log('watch', val)
        }
    },

    methods: {
        handleDayClick (event) {
            console.log(event)
        },
        handleDateClick () {
            this.visiblePopup = true
        },
        handleDateChange (date) {
            this.calendarDate = this.selectDate
        }
    },

    mounted () {
        setTimeout(() => {
            // this.events.push({ date: '2018-06-06', sign: 'warning' })
        }, 2000)
    }
}
</script>
