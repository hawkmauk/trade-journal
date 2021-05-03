<template>
  <div id="PositionForm">
    <div class="row">
      <label for="position.leverage">Leverage: </label>
      <input v-model="position.leverage" type="Number" label="Leverage" />
    </div>

    <div class="row">
      <label for="position.size">Size: </label>
      <input v-model="position.size" type="Number" step="0.00000001" label="Size" />
    </div>

    <div class="row">
      <label for="position.date">Date: </label>
      <input type="Date" label="Date"
            :value='position.getDateInYYYYMMDD()'
            @input='position.date = new Date($event)'/>
    </div>
  </div>
</template>

<script>
import Position from '../../model/Position.js'

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

<style scoped>
#PositionForm {
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
