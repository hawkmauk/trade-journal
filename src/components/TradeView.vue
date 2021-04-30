<template>
  <div>
    <table class="trade-view">
      <tr><td>Trading Pair</td><td>{{ trade.pair }}</td></tr>
      <tr><td>Short</td><td>{{ trade.isShort() }}</td></tr>
      <tr><td>Risk</td><td>{{ trade.getRisk().toFixed(2) }}</td></tr>
      <tr><td>Reward</td><td>{{ trade.getReward().toFixed(2) }}</td></tr>
      <tr><td>Ratio</td><td>{{ trade.getRatio().toFixed(2) }}</td></tr>
    </table> 
  </div>
</template>

<script>
import Trade from '../model/Trade.js'

export default{
  props:{
    trade: Trade
  },
  data () {
    return {
      name: "Trade",
    }
  },
}
</script>
