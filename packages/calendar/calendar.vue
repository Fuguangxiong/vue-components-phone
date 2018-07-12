<template>
    <div class="calendar-wrapper">
        <div class="calendar__header" :style="styleHeader">
            <div class="prev" :class="underMin ? 'hidden' : ''" @click="handlePrev">《</div>

            <div class="date" @click="handleDateClick">{{ year }} 年 {{ month }} 月</div>

            <div class="next" :class="overMax ? 'hidden' : ''" @click="handleNext">》</div>
        </div>

        <div class="calendar__week" :style="styleWeek">
            <div class="date">日</div>
            <div class="date">一</div>
            <div class="date">二</div>
            <div class="date">三</div>
            <div class="date">四</div>
            <div class="date">五</div>
            <div class="date">六</div>
        </div>

        <transition :name="transition">
            <div class="calendar__day" :style="styleDate">
                <div class="date" v-for="(item, index) in dates" :key="index" @click="handleDayClick(item)">
                    {{ item.day }}
                    <div class="sign" :class="`is-${item.sign}`" v-if="item.sign"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'BaseCalendar',

    props: {
        /**
         * @argument {String} sign 标记状态。primary, warning
         * @argument {String} date 2018-06-08
         */
        events: {
            type: Array,
            default () {
                return []
            }
        },
        value: {
            type: Date,
            default () {
                return new Date()
            }
        },
        start: {
            type: Date
        },
        end: {
            type: Date
        },

        headerColor: String,
        weekColor: String,
        dateColor: String
    },

    data () {
        return {
            currentValue: this.value
        }
    },

    computed: {
        limitMin () {
            if (!this.start) return [0, 0]
            const year = this.start.getFullYear()
            const month = this.start.getMonth() + 1
            return [year, month]
        },
        limitMax () {
            if (!this.end) return [0, 0]
            const year = this.end.getFullYear()
            const month = this.end.getMonth() + 1
            return [year, month]
        },
        underMin () {
            const [limitYear, limitMonth] = this.limitMin
            const year = this.currentValue.getFullYear()
            const month = this.currentValue.getMonth() + 1
            return year <= limitYear && month <= limitMonth
        },
        overMax () {
            const [limitYear, limitMonth] = this.limitMax
            const year = this.currentValue.getFullYear()
            const month = this.currentValue.getMonth() + 1
            return year >= limitYear && month >= limitMonth
        },
        year () {
            return this.currentValue.getFullYear()
        },
        month: {
            get () {
                return this.currentValue.getMonth() + 1
            },
            set (val) {
                const newDate = new Date(this.year, val - 1, 1)
                this.currentValue = newDate
            }
        },
        date () {
            return this.currentValue.getDate()
        },
        firstDayOfMonth () {
            return new Date(this.year, this.month - 1, 1).getDay()
        },
        lastDateOfMonth () {
            return new Date(this.year, this.month, 0).getDate()
        },
        lastDayOfMonth () {
            return new Date(this.year, this.month, 0).getDay()
        },
        startLackArray () {
            // 第一天为周几（0 ~ 6），正好意味着日历前面需要添加几个空数据
            const array = []
            for (let i = 0; i < this.firstDayOfMonth; i++) {
                array.push('')
            }
            return array
        },
        endLackArray () {
            // 最后一天为周几（0 ~ 6），和 6 差了多少就意味着要补齐多少个空数据
            const array = []
            for (let i = 0; i < 6 - this.lastDayOfMonth; i++) {
                array.push('')
            }
            return array
        },
        /**
         * 日历循环数组
         * @argument {Object} events 传入的 events 对象数组
         * @argument {Number} day 日期数字，显示值
         */
        dates () {
            const dateArray = []
            for (let i = 1; i <= this.lastDateOfMonth; i++) {
                const events = this.getEvents(i)
                dateArray.push(Object.assign({}, events, { day: i }))
            }
            dateArray.unshift(...this.startLackArray)
            dateArray.push(...this.endLackArray)

            return dateArray
        },
        /**
         * 动画
         */
        transition () {
            return ''
        },
        /**
         * 样式
         */
        styleHeader () {
            return {
                color: this.headerColor
            }
        },
        styleWeek () {
            return {
                color: this.weekColor
            }
        },
        styleDate () {
            return {
                color: this.dateColor
            }
        }
    },

    watch: {
        value (val) {
            // console.log('value', val)
            this.currentValue = val
        },
        currentValue (val) {
            // console.log('currentValue', val)
            this.$emit('input', val)
        }
    },

    methods: {
        handleNext () {
            this.month++
        },
        handlePrev () {
            this.month--
        },
        handleDateClick () {
            this.$emit('date-click')
        },
        handleDayClick (item) {
            this.$emit('day-click', item)
        },
        getEvents (date) {
            function fixZero (num) {
                return num < 10 ? `0${num}` : num
            }

            date = `${this.year}-${fixZero(this.month)}-${fixZero(date)}`
            return this.events.find(item => item.date === date) || {}
        }
    }
}
</script>
