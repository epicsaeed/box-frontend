import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmsService } from '../films.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditWindowComponent } from './edit-window/edit-window.component';

@Component({
  selector: 'app-films-menu',
  templateUrl: './films-menu.component.html',
  styleUrls: ['./films-menu.component.css']
})
export class FilmsMenuComponent implements OnInit {

  constructor(private FilmsAPI:FilmsService, public dialog: MatDialog) { }

  films:any=[];
  /*selectedFilm = {
    title:""
  }*/

  ngOnInit(): void {
    this.refreshFilmsList();
  }
  
  refreshFilmsList(){
    this.FilmsAPI.getAllFilms().subscribe(data =>{ this.films = data});
  }

  deleteClicked(film:any){
    const dialogRef = this.dialog.open(DeleteDialogComponent, { 
      width: '390px',
      height: '220px',
      data: {film:film}
    });
  }

  editClicked(film:any){
    const dialogRef = this.dialog.open(EditWindowComponent, {
      data: {film:film}
    })
  }

}