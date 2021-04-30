<template>
  <div>
    <h1>{{ name }}</h1>
    <label for="entry.conviction">Conviction: </label>
    <select v-model="entry.conviction"
      data-test="selectConviction"
      label="Conviction">
        <option disabled value="">select</option>
        <option v-for="value in getConvictions()"
                v-bind:key="value">{{ value }}</option>      
    </select>

    <label for="entry.strategy">Strategy: </label>
    <input v-model="entry.strategy" label="Strategy" />

    <label for="entry.description">Description: </label>
    <textarea v-model="entry.description" label="Description" />

    <label for="entry.url">Chart: </label>
    <input v-model="entry.url" type="url"  label="Strategy" />
  </div>
</template>

<script>
import Entry from '../model/Entry.js'

export default {
  data () {
    return {
      name: "Entry",
      entry: {}
    }
  },
  created () {
    this.entry = new Entry() // use model class from the Api
  },
  methods: {
    btnClick: function () {
      alert("clicked")
    },
    getConvictions() {
      return Object.values(Entry.Conviction)
    }
  }
}
</script>

