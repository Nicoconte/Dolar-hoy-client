import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl } from "@angular/forms";

import { Dolar } from "../models/Dolar";

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  banks : any = [
    "BBVA",
    "Piano",
    "Hipotecario",
    "Galicia",
    "Santander",
    "Ciudad",
    "Supervielle",
    "Patagonia",
    "Comafi",
    "Nacion",
    "Bind",
    "Bancor",
    "Chaco",
    "Pampa"
  ];

  currentBank : String;
  selectMessage : String = null;
  dolar : Dolar;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.dolar = new Dolar(this.http); //We must init the variable
  }

  // Forms
  bankForm = new FormGroup({
    name : new FormControl(this.selectMessage)
  })

  //This method get the changes in the app
  onChange(event : any) {
    this.currentBank = this.bankForm.value.name;
    this.dolar = new Dolar(this.http);
    this.dolar.getDolarInformationFrom(this.bankForm.value.name);
  }

}
