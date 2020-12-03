import { Component, OnInit } from '@angular/core';

import { News } from "../models/News";
import { NewsService } from "../services/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsResponse : News[] = new Array();

  constructor(private newService : NewsService) { }
  
  ngOnInit(): void {
    this.newService.getNews().subscribe(response => {
      response.articles.forEach(res => {
        this.newsResponse.push(new News(res.title, res.publishedAt, res.url, res.author, res.urlToImage));
      })
    });
  }

}
