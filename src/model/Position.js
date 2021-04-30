export default class Position
{
    size = 0;
    leverage = 0;
    date = new Date();

    getDateInYYYYMMDD(){
      return this.date.toISOString().split('T')[0]
    }
}
