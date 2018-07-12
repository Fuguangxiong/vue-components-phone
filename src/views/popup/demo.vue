<template>
    <app-view-box title="popup demo">
        <base-cell label="visible popup">
            <base-switch v-model="visiblePopup"></base-switch>
        </base-cell>

        <base-popup
            :visible.sync="visiblePopup"
            position="bottom"
            :close-on-click-modal="true"
            transparent
            @open="handleOpen"
            @close="handleClose">
            <div style="margin: 10px; padding: 15px 0; background: #fff; border-radius: 5px;">
                <base-cell label="visible popup">
                    <base-switch v-model="visiblePopup"></base-switch>
                </base-cell>
                <base-cell label="label" value="value" class="cell-test" to="/"></base-cell>
                <base-cell label="label" is-link></base-cell>
                <base-cell
                    label="很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长"
                    value="很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长"
                    is-link>
                </base-cell>
                <base-cell icon="success" label="label" value="value"></base-cell>
                <base-cell label="label" value="value" :label-width="200"></base-cell>
                <base-cell label="label" value="value">
                    <span slot="addon">0.00</span>
                </base-cell>
                <base-cell label="label" value="value">
                    <base-icon icon="warning"></base-icon>
                    <div slot="label">slot label</div>
                    <div style="color: green;">slot value</div>
                </base-cell>
            </div>
        </base-popup>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            visiblePopup: false
        }
    },

    methods: {
        handleOpen () {
            this.$toast('open')
        },
        handleClose () {
            this.$toast('close')
        }
    }
}
</script>
