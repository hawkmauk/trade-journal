<template>
<div id="journal">
  <entry-form></entry-form>
  <trade-form></trade-form>
  <position-form></position-form>
</div>
</template>

<script>
import TradeForm from './TradeForm.vue'
import PositionForm from './PositionForm.vue'
import EntryForm from './EntryForm.vue'

export default {
  data () {
    return {
      name: "Journal"
    }
  },
  components: {
    TradeForm,
    PositionForm,
    EntryForm
  }
}
</script>

<style scoped>
</style>
