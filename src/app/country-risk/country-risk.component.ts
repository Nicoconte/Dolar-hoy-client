import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Risk } from "../models/Risk"; 

@Component({
  selector: 'app-country-risk',
  templateUrl: './country-risk.component.html',
  styleUrls: ['./country-risk.component.css']
})
export class CountryRiskComponent implements OnInit {

  constructor(private http : HttpClient) { }

  points : Risk;

  ngOnInit(): void {
    this.points = new Risk(this.http);
    this.points.getCountryRisk();
  }

}
