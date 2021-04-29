enum TradePair
{
  BTCGBP = "BTCGBP";
}

class Position
{
  constructor(pair,stop,take,trades){
    this.pair = pair;
    this.stop = stop;
    this.take = take;
    this.trades = trades;
  }
}

module.exports = {
  TradePair,
  Position
}
