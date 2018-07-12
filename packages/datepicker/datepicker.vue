<template>
    <div class="datepicker">
        <base-popup :visible.sync="visible">
            <div class="datepicker-toolbar">
                <div class="datepicker-toolbar__action" @click="handleCancel">取消</div>
                <div class="datepicker-toolbar__action" @click="handleConfirm">确定</div>
            </div>

            <base-picker>
                <base-picker-item :options="years" v-model="currentYear"></base-picker-item>
                <base-picker-item :options="months" v-model="currentMonth" v-if="normalizedType >= 2"></base-picker-item>
                <base-picker-item :options="dates" v-model="currentDate" v-if="normalizedType >= 3"></base-picker-item>
            </base-picker>
        </base-popup>
    </div>
</template>

<script>
import BasePopup from '../popup/popup.js'
import BasePicker from '../picker/picker.js'
import BasePickerItem from '../picker-item/picker-item.js'

export default {
    name: 'BaseDatepicker',

    props: {
        visible: {
            type: Boolean,
            default: false
        },
        value: {
            type: Date,
            default () {
                return new Date()
            }
        },
        /**
         * 组件的类型
         * 可选值 year, month, date
         */
        type: {
            type: String,
            default: 'date'
        },
        start: {
            type: Date
        },
        end: {
            type: Date
        }
    },

    data () {
        return {
            currentYear: '',
            currentMonth: '',
            currentDate: ''
        }
    },

    computed: {
        years () {
            const startYear = this.start ? this.start.getFullYear() : new Date().getFullYear() - 10
            const endYear = this.end ? this.end.getFullYear() : new Date().getFullYear() + 10
            return Array.from({ length: endYear - startYear + 1 }, (value, index) => ({ label: index + startYear, value: index + startYear }))
        },
        months () {
            const startYear = this.start ? this.start.getFullYear() : -1
            const endYear = this.end ? this.end.getFullYear() : -1

            const startMonth = this.currentYear === startYear ? this.start.getMonth() + 1 : 1
            const endMonth = this.currentYear === endYear ? this.end.getMonth() + 1 : 12

            return Array.from({ length: endMonth - startMonth + 1 }, (value, index) => ({ label: index + startMonth, value: index + startMonth }))
        },
        dates () {
            let startYear
            let startMonth
            if (this.start) {
                startYear = this.start.getFullYear()
                startMonth = this.start.getMonth() + 1
            }

            let endYear
            let endMonth
            if (this.end) {
                endYear = this.end.getFullYear()
                endMonth = this.end.getMonth() + 1
            }

            const lastDate = new Date(this.currentYear, this.currentMonth, 0).getDate()
            const startDate = (this.currentYear === startYear && this.currentMonth === startMonth) ? this.start.getDate() : 1
            const endDate = (this.currentYear === endYear && this.currentMonth === endMonth) ? this.end.getDate() : lastDate

            return Array.from({ length: endDate - startDate + 1 }, (value, index) => ({ label: index + startDate, value: index + startDate }))
        },
        normalizedType () {
            switch (this.type) {
            case 'year':
                return 1
            case 'month':
                return 2
            default:
                return 3
            }
        }
    },

    watch: {
        visible (val) {
            this.$emit('update:visible', val)

            if (val) {
                this.currentYear = this.value.getFullYear()
                this.currentMonth = this.value.getMonth() + 1
                this.currentDate = this.value.getDate()
            }
        },
        currentYear (val) {
            const index = this.months.findIndex(item => item.value === this.currentMonth)
            if (index === -1) {
                this.currentMonth = this.months[0].value
            }
        },
        currentMonth (val) {
            const index = this.dates.findIndex(item => item.value === this.currentDate)
            if (index === -1) {
                this.currentDate = this.dates[0].value
            }
        }
    },

    methods: {
        handleConfirm () {
            const newDate = new Date(this.currentYear, this.currentMonth - 1, this.currentDate)
            this.$emit('input', newDate)
            this.$emit('change', newDate)
            this.$emit('update:visible', false)
        },
        handleCancel () {
            this.$emit('update:visible', false)
        }
    },

    created () {
    },

    components: {
        BasePopup,
        BasePicker,
        BasePickerItem
    }
}
</script>
