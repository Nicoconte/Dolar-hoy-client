import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DolarTodayComponent } from "./dolar-today/dolar-today.component";
import { BankComponent } from "./bank/bank.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CountryRiskComponent } from "./country-risk/country-risk.component";
import { NewsComponent } from "./news/news.component";
import { FeedbackComponent } from "./feedback/feedback.component";

const routes: Routes = [
  {path : 'general', component : DolarTodayComponent},
  {path : 'bank', component : BankComponent},
  {path : 'country-risk', component : CountryRiskComponent},
  {path : 'news', component : NewsComponent},
  {path : 'feedback', component : FeedbackComponent},
  {path : "", redirectTo : "/general", pathMatch : "full"},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
