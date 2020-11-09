import { HttpClient } from "@angular/common/http";
import { LoadingService } from "../services/loading-service.service";

export class Dolar{
    private type : String;
    private pricingToBuy : any;
    private pricingToSell : any;
    private lastUpdate : String;

    private http : HttpClient;
    private service : LoadingService;

    constructor(http : HttpClient, type : String="") {
        this.type = type;
        this.http = http;
    }

    public setPricingToBuy(pricing : number) {
        this.pricingToBuy = pricing;
    }

    public getPricingToBuy() {
        return this.pricingToBuy;
    }

    public setPricingToSell(pricing : number) {
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

    /**
     * getDolarInformation: Obtain the different dollar values 
     */
    public getDolarInformation() {

        this.http.get<any>("/api/" + this.type).subscribe(res => {
            this.pricingToBuy = res.compra;
            this.pricingToSell = res.venta;
            this.lastUpdate = res.fecha;
        });
    }

    public getDolarInformationFrom(bank : String) {
        this.http.get<any>("/api/" + bank).subscribe(res => {
            this.pricingToBuy = res.compra;
            this.pricingToSell = res.venta;
            this.lastUpdate = res.fecha;
        });
    }
}