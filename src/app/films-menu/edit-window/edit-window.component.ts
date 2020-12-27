import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmsService } from 'src/app/films.service';

@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.css']
})
export class EditWindowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditWindowComponent>,
    private _FilmAPI: FilmsService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    //current_film!:any;

    current_film = {
      poster: this.data.film.poster,
      title: this.data.film.title,
      genre: this.data.film.genre,
      year: this.data.film.year,
      runtime: this.data.film.runtime
    }

  response = {
    code:"",
    message:""
  }

  showSuccess = false;
  showFailure = false;

  ngOnInit(): void {
    console.log(this.data.film)
  }

  editClicked(){

  }

  closeDialog(){
    this.dialogRef.close();
  }
}
