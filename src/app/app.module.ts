import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmsMenuComponent } from './films-menu/films-menu.component';
import { HeaderComponent } from './header/header.component';

import { FilmsService } from './films.service';
import { HttpClientModule } from '@angular/common/http';

//ngMaterial imports
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { FilmsMenuToolbarComponent } from './films-menu/films-menu-toolbar/films-menu-toolbar.component';
import { FilmsMenuAddWindowComponent } from './films-menu/films-menu-add-window/films-menu-add-window.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    FilmsMenuComponent,
    HeaderComponent,
    FilmsMenuToolbarComponent,
    FilmsMenuAddWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
