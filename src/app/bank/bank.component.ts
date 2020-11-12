import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Dolar } from "../models/Dolar";

import { DolarTodayService } from "../services/dolar-today.service";

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

  dolar : Dolar;
  selectMessage : String = "Seleccione un banco";

  constructor(private dolarService : DolarTodayService) { }

  ngOnInit(): void {
    this.dolar = new Dolar("No hay fecha", "No hay valor de compra", "No hay valor de venta", "No hay banco");
  }

  bankForm = new FormGroup({
    name : new FormControl("Seleccione un banco")
  })

  //This method get the changes in the app
  onChange(event : any) {
    this.dolarService.getDolarFrom(this.bankForm.value.name).subscribe(res => {
      this.dolar = new Dolar(res.fecha, res.venta, res.compra, this.bankForm.value.name);
    });
  }
}
