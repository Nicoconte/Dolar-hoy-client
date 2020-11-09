import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NavbarService {

  event : Observable<any>;
  clicked : boolean;

  show() {
    this.event.subscribe(res => {
      if (res) {
        this.clicked = true;
      }
    });
  }

  hide() {
    this.event.subscribe(res => {
      if (res) {
        this.clicked = false;
      }
    });
  }

  constructor() { }
}
