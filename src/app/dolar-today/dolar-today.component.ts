// Modules
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

//Classes 
import { Dolar } from "../models/Dolar";

@Component({
  selector: 'app-dolar-today',
  templateUrl: './dolar-today.component.html',
  styleUrls: ['./dolar-today.component.css']
})
export class DolarTodayComponent implements OnInit {

  blue : Dolar;
  official : Dolar; 
  bag : Dolar;
  withLiqui : Dolar;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  
    this.blue = new Dolar(this.http, "dolarblue");  
    this.blue.getDolarInformation();

    this.official = new Dolar(this.http, "dolaroficial");  
    this.official.getDolarInformation();

    this.bag = new Dolar(this.http, "dolarbolsa");  
    this.bag.getDolarInformation();

    this.withLiqui = new Dolar(this.http, "contadoliqui");  
    this.withLiqui.getDolarInformation();
    
  }
  
}
