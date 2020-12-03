import { Component, OnInit } from '@angular/core';

import { Dolar } from "../models/Dolar";

import { DolarTodayService } from "../services/dolar-today.service";

@Component({
  selector: 'app-dolar-today',
  templateUrl: './dolar-today.component.html',
  styleUrls: ['./dolar-today.component.css']
})
export class DolarTodayComponent implements OnInit {
  typeOfDolars : String[] = ['Dolar Blue', 'Dolar Oficial', 'Dolar Bolsa', 'Contado Liqui'];
  responses : Dolar[] = new Array();

  constructor(private dolarService : DolarTodayService) { }

  ngOnInit(): void {
    this.typeOfDolars.forEach(req => {
      this.dolarService.getDolarFrom(req.replace(" ","").toLowerCase()).subscribe(res => {
        if (res) {
          this.responses.push(new Dolar(res.fecha, res.venta, res.compra, req));
        }
      });
    });
  }
  
}
