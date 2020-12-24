import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsMenuComponent } from './films-menu/films-menu.component';
//import needed modules

const routes: Routes = [
  { path:'films', component: FilmsMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
