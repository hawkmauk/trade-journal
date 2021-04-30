export default class Entry
{
    conviction = Entry.Conviction.LOW;
    strategy = '';
    description = '';
    url = undefined;
    success = undefined;
    position = undefined;
    trade = undefined;
}

Entry.Conviction = { HIGH: "High", MED: "Medium", LOW: "Low" }
