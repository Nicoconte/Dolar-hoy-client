import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RiskService {

  private url : String = "/api/riesgopais";

  constructor(private http : HttpClient) { }

  getRiskPoint() : Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

}
