import { HttpClient } from "@angular/common/http";

export class Risk {
    private lastUpdate : any;
    private riskPoint : any;

    private http : HttpClient;

    public setLastUpdate(update : any) {
        this.lastUpdate = update;
    }

    public getLastUpdate() {
        return this.lastUpdate;
    }

    public setRiskPoint(points : any) {
        this.riskPoint = points;
    }

    public getRiskPoint() {
        return this.riskPoint;
    }

    constructor(http : HttpClient) {
        this.http = http;
    }

    public getCountryRisk() {
        this.http.get<any>("/api/riesgopais").subscribe(res => {
            this.riskPoint = res.valor;
            this.lastUpdate = res.fecha;
        })
    }
}