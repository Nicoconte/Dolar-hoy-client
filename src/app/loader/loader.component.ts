//Tutorial sobre la pantalla de carga https://firstclassjs.com/display-a-loader-on-every-http-request-using-interceptor-in-angular-7/

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
 
import { LoadingService } from "../services/loading-service.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  color = "primary";
  mode = "indeterminate";
  value = 50;
  isLoading : Subject<boolean> = this.loadingService.isLoading;

  constructor(private loadingService : LoadingService) { }

  ngOnInit(): void {
  }

}
