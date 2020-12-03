import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl : String = `/v2/top-headlines?country=ar&from="${this.getCurrentDate()}"&pageSize=20&category=business&apiKey=2abe2eadfbce45bc9044dbbdbd05e5b9`

  constructor(private http : HttpClient) { }

  getNews() {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  private getCurrentDate() {
    var date = new Date();
    var d = date.getDay() + 1;
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return (y+"-"+m+"-"+d).toString;
  }

}
