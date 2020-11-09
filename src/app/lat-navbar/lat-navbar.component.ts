import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lat-navbar',
  templateUrl: './lat-navbar.component.html',
  styleUrls: ['./lat-navbar.component.css']
})
export class LatNavbarComponent implements OnInit {

  constructor() { }

  @Input("clicked") event : any;

  ngOnInit(): void {
  }

}
