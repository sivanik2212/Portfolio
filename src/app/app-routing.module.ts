import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioDataComponent } from './portfolio-data/portfolio-data.component';

const routes: Routes = [
  {path:'',redirectTo:'books', pathMatch: 'full' },

  { path: 'portfolio', component: PortfolioDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
