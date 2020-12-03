export class Risk {
    private lastUpdate : String;
    private riskPoint : String;

    constructor(lastUpdate : String, riskPoint : String) {
        this.lastUpdate = lastUpdate;
        this.riskPoint = riskPoint;
    }

    public setLastUpdate(update : String) {
        this.lastUpdate = update;
    }

    public getLastUpdate() {
        return this.lastUpdate;
    }

    public setRiskPoint(points : String) {
        this.riskPoint = points;
    }

    public getRiskPoint() {
        return this.riskPoint;
    }

}