export default class Trade {

  pair = ''
  entry = 0.0
  stop = 0.0
  take = 0.0

  getRisk()
  {
    // If either entry or stop are 0 return 0
    if ( this.entry * this.stop == 0 ) { return 0 }

    let result;
    (this.isShort()) ? result = getPercentile(this.stop,this.entry) :
      result = getPercentile(this.entry,this.stop)
    return result
  }

  getReward()
  {
    // If either entry or stop are 0 return 0
    if ( this.entry * this.take == 0 ) { return 0 }

    let result;
    (this.isShort()) ? result = getPercentile(this.take,this.entry) :
      result = getPercentile(this.entry,this.take)
    return result
  }

  getRatio()
  {
    // If any entry, stop or take are 0 return 0
    if ( this.entry * this.stop * this.take == 0 ) { return 0 }

    return this.getReward() / ( this.getRisk() * -1 )
  }
  
  isShort()
  {
    if ( this.entry > this.stop ) { return false }
    return true;
  }
}
Trade.Pair = {
  BTCUSD: "BTCUSD",
  BTCGBP: "BTCGBP"
}

function getPercentile(base,multiple){
  return (100/base)*multiple - 100
}
