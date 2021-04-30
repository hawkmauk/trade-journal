<template>
  <div>
    <div class="row">
      <label for="entry.conviction">Conviction: </label>
      <select v-model="entry.conviction"
        data-test="selectConviction"
        label="Conviction">
          <option disabled value="">select</option>
          <option v-for="value in getConvictions()"
                  v-bind:key="value">{{ value }}</option>      
      </select>
    </div>

    <div class="row">
      <label for="entry.strategy">Strategy: </label>
      <input v-model="entry.strategy" label="Strategy" />
    </div>

    <div class="row">
      <label for="entry.description">Description: </label>
      <textarea v-model="entry.description" label="Description" />
    </div>

    <div class="row">
      <label for="entry.url">Chart: </label>
      <input v-model="entry.url" type="url"  label="Strategy" />
    </div>
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

<style>
#EntryForm{
  float:left;
  max-width: 300px;
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
input,textarea,select {
  width: 100%;
}
textarea {
  height: 100px;
}
</style>
