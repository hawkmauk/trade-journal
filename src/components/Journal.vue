<template>
<div id="journal">
  <div class="group">
    <h1>Trade</h1>
    <trade-form v-bind:trade="trade"></trade-form>
  </div>
  <div class="group">
    <h1>Position</h1>
    <position-form v-bind:position="position"></position-form>
  </div>
  <div class="group">
    <h1>Entry</h1>
    <entry-form v-bind:entry="entry"></entry-form>
  </div>
  <div class="group">
    <h1>Summary</h1>
    <trade-view v-bind:trade="trade"
          v-bind:position="position"
          v-bind:entry="entry"></trade-view>
   </div>
</div>
</template>

<script>
import TradeView from './TradeView.vue'
import TradeForm from './TradeForm.vue'
import PositionForm from './PositionForm.vue'
import EntryForm from './EntryForm.vue'

import Trade from '../model/Trade.js'
import Position from '../model/Position.js'
import Entry from '../model/Entry.js'

export default {
  data () {
    return {
      name: "Journal",
      trade: {},
      position: {},
      entry: {}
    }
  },
  created () {
    this.trade = new Trade(),
    this.position = new Position(),
    this.entry = new Entry()
  },
  components: {
    TradeForm,
    TradeView,
    PositionForm,
    EntryForm
  }
}
</script>

<style>
.group {
  float: left;
  width: 25%;
  min-width: 400px;
}
</style>
