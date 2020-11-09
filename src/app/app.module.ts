import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupNavbarComponent } from './sup-navbar/sup-navbar.component';
import { LatNavbarComponent } from './lat-navbar/lat-navbar.component';
import { DolarTodayComponent } from './dolar-today/dolar-today.component';
import { BankComponent } from './bank/bank.component';
import { LoaderComponent } from './loader/loader.component';

import { LoadingService } from "./services/loading-service.service";

import { LoaderInterceptor } from "./interceptors/loader.interceptor";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SupNavbarComponent,
    LatNavbarComponent,
    DolarTodayComponent,
    BankComponent, 
    LoaderComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [LoadingService, 
  {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
