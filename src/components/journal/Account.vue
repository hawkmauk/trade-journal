<template>
  <div id="AccountForm">
    <div class="row">
      <div id="balance">Balance: {{ account.balance }}</div>
      <div id="actions">
        <label for="amount">Amount: </label>
        <input v-model="amount" type="Number" step="0.00000001" label="Amount" />
        <button v-on:click="withdraw">Withdraw</button>
        <button v-on:click="deposit">Deposit</button>
      </div>
    </div>
  </div>
</template>

<script>
import Account from '../../model/Account.js'

export default {
  data () {
    return {
      name: "Account",
      account: {},
      amount: 0
    }
  },
  created () {
    this.account = new Account()
  },
  methods: {
    withdraw: function(event) {
      if (event) {
        try{
          this.account.withdraw(this.amount)
        } catch(e) {
          alert(e)
        }
      }
    },
    deposit: function(event) {
      if (event) {
        this.account.deposit(this.amount)
      }
    } 
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
  width: 100px
}
input{
  width: 200px;
}
#actions{
  width: 50%;
}
#balance {
  width: 50%
}
</style>
