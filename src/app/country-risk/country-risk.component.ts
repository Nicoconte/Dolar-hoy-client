import { Component, OnInit } from '@angular/core';

import { RiskService } from "../services/risk.service";
import { Risk } from "../models/Risk"; 

@Component({
  selector: 'app-country-risk',
  templateUrl: './country-risk.component.html',
  styleUrls: ['./country-risk.component.css']
})
export class CountryRiskComponent implements OnInit {

  constructor(private riskService : RiskService) { }

  risk : Risk = new Risk("", "");

  ngOnInit(): void {
    this.riskService.getRiskPoint().subscribe(res => {
      if (res) {
        this.risk.setLastUpdate(res.fecha)
        this.risk.setRiskPoint(res.valor);
      }
    });
  }

}
