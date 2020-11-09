import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { News } from "../models/News";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : News;
  newsResponse : any[];

  constructor(private http : HttpClient) { }
  
  ngOnInit(): void {
    this.news = new News(this.http);
    this.newsResponse = this.news.getLastestNews( this.getCurrentDate() );
  }

  private getCurrentDate() {
    var date = new Date();
    var d = date.getDay() + 1;
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return (y+"-"+m+"-"+d).toString;
  }

}
