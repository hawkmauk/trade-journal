<template>
<div id="journal">
  <journal-form :editing="true"></journal-form>
</div>
</template>

<script>
import JournalForm from './JournalForm.vue'

export default {
  data () {
    return {
      name: "Journal"
    }
  },
  components: {
    JournalForm
  }
}
</script>

<style scoped>
</style>
