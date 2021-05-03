<template>
<div id="journal">
  <div class="account">
    <account-form v-bind:account="account"></account-form>
  </div>
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
    <summary-view v-bind:trade="trade"
          v-bind:position="position"
          v-bind:entry="entry"
          v-bind:account="account"></summary-view>
   </div>
</div>
</template>

<script>
import SummaryView from './Summary.vue'
import AccountForm from './Account.vue'
import TradeForm from './Trade.vue'
import PositionForm from './Position.vue'
import EntryForm from './Entry.vue'

import Account from '../../model/Account.js'
import Trade from '../../model/Trade.js'
import Position from '../../model/Position.js'
import Entry from '../../model/Entry.js'

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
    this.account = new Account(),
    this.trade = new Trade(),
    this.position = new Position(),
    this.entry = new Entry()
  },
  components: {
    AccountForm,
    TradeForm,
    PositionForm,
    EntryForm,
    SummaryView
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
