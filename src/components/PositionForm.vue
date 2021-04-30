<template>
  <div>
    <h1>{{ name }}</h1>
    <label for="position.leverage">Leverage: </label>
    <input v-model="position.leverage" type="Number" label="Leverage" />

    <label for="position.size">Size: </label>
    <input v-model="position.size" type="Number" step="0.00000001" label="Size" />

    <label for="position.date">Date: </label>
    <input type="Date" label="Date"
          :value='position.getDateInYYYYMMDD()'
          @input='position.date = new Date($event)'/>
  </div>
</template>

<script>
import Position from '../model/Position.js'

export default {
  data () {
    return {
      name: "Position",
      position: {}
    }
  },
  created () {
    this.position = new Position()
  },
  methods: {
  }
}
</script>

