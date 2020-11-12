import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 

@Injectable({
  providedIn: 'root'
})
export class DolarTodayService {

  private url : String = "/api/";

  constructor(private http : HttpClient) { }

  getDolarFrom(request : String) {
    return this.http.get<any>(`${this.url}${request}`);
  }

}
