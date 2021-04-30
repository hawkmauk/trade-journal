<template>
  <div id="TradeForm">
    <div class="row">
      <label for="trade.pair">Trading Pair: </label>
      <select v-model="trade.pair"
        data-test="selectPair"
        label="Pair">
          <option disabled value="">select pair</option>
          <option v-for="pair in getPairs()"
                  v-bind:key="pair">{{ pair }}</option>      
      </select>
    </div>

    <div class="row">
      <label for="trade.entry">Entry: </label>
      <input v-model="trade.entry" type="Number" step="0.01" label="Entry" />
    </div>

    <div class="row">
      <label for="trade.stop">Stop: </label>
      <input v-model="trade.stop" type="Number" step="0.01" label="Stop" />
    </div>

    <div class="row">
      <label for="trade.take">Take: </label>
      <input v-model="trade.take" type="Number" step="0.01" label="Take" />
    </div>

  </div>
</template>

<script>
import Trade from '../model/Trade.js'

export default {
  props: {
    trade: Trade
  },
  data () {
    return {
      name: "Trade"
    }
  },
  methods: {
    getPairs() {
      return Object.values(Trade.Pair)
    }
  }
}
</script>

<style>
#TradeForm {
  float: left;
}
.row {
  display: flex;
  align-items: center;
  margin: 10px;
}

label {
  display:block;
  float: left;
  width: 200px
}
</style>
