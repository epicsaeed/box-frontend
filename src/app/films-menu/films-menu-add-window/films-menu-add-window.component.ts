import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FilmsService } from '../../films.service';

@Component({
  selector: 'app-films-menu-add-window',
  templateUrl: './films-menu-add-window.component.html',
  styleUrls: ['./films-menu-add-window.component.css']
})
export class FilmsMenuAddWindowComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<FilmsMenuAddWindowComponent>, private _FilmAPI: FilmsService ) { }

  posterAvailable = false;
  showSuccess = false;
  showFailure = false;

  public response = {
    code:"",
    message:""
  }

  public film = {
    title:"",
    year:"",
    genre:"",
    runtime:"",
    poster:""
  }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

  fetchDetails(){
    this._FilmAPI.getFilmPoster(this.film.title).subscribe(data => {
      this.film.poster = data.poster;
      this.posterAvailable = true;
    });
``  }

  addClicked(){
    this._FilmAPI.addNewFilm(this.film).subscribe( data => { 
      this.response.code = data.code;
      this.response.message = data.message;
      if(this.response.code == "success") this.showSuccess = true;
      if(this.response.code == "fail") this.showFailure = true;
    })
  

  }
}
