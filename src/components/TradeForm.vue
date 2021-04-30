<template>
  <div>
    <h1>{{ name }}</h1>
    <label for="trade.pair">Trading Pair: </label>
    <select v-model="trade.pair"
      data-test="selectPair"
      label="Pair">
        <option disabled value="">select pair</option>
        <option v-for="pair in getPairs()"
                v-bind:key="pair">{{ pair }}</option>      
    </select>

    <label for="trade.entry">Entry: </label>
    <input v-model="trade.entry" type="Number" step="0.01" label="Entry" />

    <label for="trade.stop">Stop: </label>
    <input v-model="trade.stop" type="Number" step="0.01" label="Stop" />

    <label for="trade.take">Take: </label>
    <input v-model="trade.take" type="Number" step="0.01" label="Take" />

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

