<template>
<div id="journal">
  <trade-form v-bind:trade="trade"></trade-form>
  <trade-view v-bind:trade="trade"></trade-view>
  <entry-form></entry-form>
  <position-form></position-form>
</div>
</template>

<script>
import TradeView from './TradeView.vue'
import TradeForm from './TradeForm.vue'
import PositionForm from './PositionForm.vue'
import EntryForm from './EntryForm.vue'
import Trade from '../model/Trade.js'

export default {
  data () {
    return {
      name: "Journal",
      trade: {}
    }
  },
  created () {
    this.trade = new Trade()
  },
  components: {
    TradeForm,
    TradeView,
    PositionForm,
    EntryForm
  }
}
</script>

<style scoped>
</style>
