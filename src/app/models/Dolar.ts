export class Dolar{
    private type : String;
    private pricingToBuy : any;
    private pricingToSell : any;
    private lastUpdate : String;

    constructor(lastUpdate : String, pricingToSell : String,  pricingToBuy : String, type?: String) {
        this.type = type;
        this.pricingToBuy = pricingToBuy;
        this.pricingToSell = pricingToSell;
        this.lastUpdate = lastUpdate;
    }

    public setType(type : String) {
        this.type = type;
    }

    public getType() {
        return this.type;
    }

    public setPricingToBuy(pricing : String) {
        this.pricingToBuy = pricing;
    }

    public getPricingToBuy() {
        return this.pricingToBuy;
    }

    public setPricingToSell(pricing : String) {
        this.pricingToSell = pricing;
    }

    public getPricingToSell() {
        return this.pricingToSell;
    }

    public setLastUpdate(date : String) {
        this.lastUpdate = date;
    }
    
    public getLastUpdate() {
        return this.lastUpdate;
    }
}