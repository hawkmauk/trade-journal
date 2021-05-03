export default class Account
{
  balance = 0;

  deposit(amount)
  {    
    this.balance += parseInt(amount);
    console.log(this.balance)
  }

  withdraw(amount)
  {
    if (amount > this.balance) { throw "Insufficiant Funds" }
    this.balance -= parseInt(amount);
  }

}
