<template>
  <div class="journal-form">
    <div class="center">
      <h1>{{editing? 'Edit':'Add'}} entry</h1>

      <fieldset>
      <label for="iConviction">{{ text.conviction.label }}</label>
      <select v-model="iConviction"
              data-test="convictionSelect">
        <option disabled value="">{{ text.conviction.placeholder }}</option>
        <option v-for="conviction in convictionAvailable"
                v-bind:key="conviction">{{ conviction }}</option>      
      </select>

      <label for="iStrategy">{{ text.strategy.label }}</label>
      <input v-model="iStrategy"
             data-test="strategyInput">

      <label for="iDescription">{{ text.description.label }}</label>
      <textarea v-model="iDescription"
             data-test="descriptionInput"></textarea>

      <label for="iChart">{{ text.chart.label }}</label>
      <input v-model="iChart"
             type="url"
             data-test="chartInput">

      </fieldset>

      <fieldset>
      <label for="iPair">{{ text.pair.label }}</label>
      <select v-model="iPair"
              data-test="pairSelect">
        <option disabled value="">{{ text.pair.placeholder }}</option>
        <option v-for="pair in pairAvailable"
                v-bind:key="pair">{{ pair }}</option>      
      </select>

      <label for="iDirection">{{ text.direction.label }}</label>
      <select v-model="iDirection"
              data-test="directionSelect">
        <option disabled value="">{{ text.direction.placeholder }}</option>
        <option v-for="direction in directionAvailable"
                v-bind:key="direction">{{ direction }}</option>      
      </select>

      <label for="iLeverage">{{ text.leverage.label }}</label>
      <select v-model="iLeverage"
              data-test="leverageSelect"
              @change="onChange($event)">
        <option disabled value="">{{ text.leverage.placeholder }}</option>
        <option v-for="leverage in leverageAvailable"
                v-bind:key="leverage">{{ leverage }}</option>
      </select>
      
      <label for="iStake">{{ text.stake.label }}</label>
      <select v-model="iStake"
              data-test="stakeSelect"
              @change="onChange($event)">
        <option disabled value="">{{ text.stake.placeholder }}</option>
        <option v-for="stake in stakeAvailable"
                v-bind:key="stake">{{ stake }}</option>
      </select>
      
      <label for="iSize">{{ text.size.label }}</label>
      <input v-model="iSize"
             data-test="sizeInput"
             type="Number"
             step="0.00000001"
             min="0.00000001"
             @change="onChange($event)">
      </fieldset>

      <fieldset>

      <label for="iEntry">{{ text.entry.label }}</label>
      <input v-model="iEntry"
             data-test="entryInput"
             type="Number"
             step="0.01"
             min="0.01"
             @change="onChange($event)">

      <label for="iStop">{{ text.stop.label }}</label>
      <input v-model="iStop"
             data-test="stopInput"
             type="Number"
             step="0.01"
             min="0.01"
             @change="onChange($event)">

      <label for="iTake">{{ text.take.label }}</label>
      <input v-model="iTake"
             data-test="takeInput"
             type="Number"
             step="0.01"
             min="0.01"
             @change="onChange($event)">
      </fieldset>

    </div>
  </div>
</template>

<script>
export default {
  name: "JournalForm",
  props: {
    editing: Boolean
  },
  data () {
    return {
      text: {
        conviction: {
          label: "Conviction",
          placeholder: "select value"
        },
        strategy: {
          label: "Strategy",
        },
        description: {
          label: "Description",
          placeholder: "select value"
        },
        chart: {
          label: "Chart Url",
        },
        leverage: {
          label: "Leverage",
          placeholder: "select number"
        },
        direction: {
          label: "Direction",
          placeholder: "select direction"
        },
        pair: {
          label: "Trading Pair",
          placeholder: "select pair"
        },
        stake: {
          label: "Percentage Stake",
          placeholder: "select perentage"
        },
        size: {
          label: "Size of stake",
          placeholder: "Enter size"
        },
        entry: {
          label: "Entry price",
        },
        stop: {
          label: "Stop price",
        },
        take: {
          label: "Take price",
        }

      },
      iConviction: "Low",
      convictionAvailable: ["Low","Med","High"],
      iStrategy: "",
      iDescription: "",
      iChart: "",
      iLeverage: 1,
      leverageAvailable: [1,2,3,4,5],
      iPair: "BTCUSD",
      pairAvailable: ["BTCUSD"],
      iStake: 0.25,
      stakeAvailable: [0.25,0.5,0.75,1],
      iDirection: "Long",
      directionAvailable: ["Long","Short"],
      iSize: 0.0,
      iEntry: 0.0,
      iStop: 0.0,
      iTake: 0.0
    }
  }
}
</script>
