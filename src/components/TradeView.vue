<template>
  <div id="TradeView">
    <table class="trade-view">
      <tr><td>Trading Pair</td><td>{{ trade.pair }}</td></tr>
      <tr><td>Short</td><td>{{ trade.isShort() }}</td></tr>
      <tr><td>Risk</td><td>{{ trade.getRisk().toFixed(2) }}</td></tr>
      <tr><td>Reward</td><td>{{ trade.getReward().toFixed(2) }}</td></tr>
      <tr><td>Ratio</td><td>{{ trade.getRatio().toFixed(2) }}</td></tr>
      <tr><td>Drawdown</td><td>{{ trade.calculateDrawdown(position.size) }}</td></tr>
    </table> 
  </div>
</template>

<script>
import Trade from '../model/Trade.js'
import Position from '../model/Position.js'
import Entry from '../model/Entry.js'

export default{
  props:{
    trade: Trade,
    position: Position,
    entry: Entry
  },
  data () {
    return {
      name: "Trade",
    }
  },
  methods: {
  }
}
</script>

<style>
td {
  padding: 3px 10px;
}
</style>
