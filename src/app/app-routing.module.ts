import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsMenuComponent } from './films-menu/films-menu.component';
import { RegisterFormComponent } from './register-form/register-form.component';
//import needed modules

const routes: Routes = [
  { path:'films', component: FilmsMenuComponent },
  { path:'register', component: RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
