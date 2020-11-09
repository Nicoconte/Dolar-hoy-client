import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DolarTodayComponent } from "./dolar-today/dolar-today.component";
import { BankComponent } from "./bank/bank.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path : 'dolar-today-component', component : DolarTodayComponent},
  {path : 'bank-component', component : BankComponent},
  {path : "", redirectTo : "/dolar-today-component", pathMatch : "full"},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }