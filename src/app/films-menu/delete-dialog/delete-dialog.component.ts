import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmsService } from '../../films.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  showFailure = false;
  showSuccess = false;

  response = {
    code:"",
    message:""
  }

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    private _FilmAPI: FilmsService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  cancelClicked(){
    this.dialogRef.close();
  }

  confirmClicked(){
    this._FilmAPI.deleteFilm(this.data.film.title).subscribe(rdata => {
      this.response.code = rdata.code;
      this.response.message = rdata.message;
      if(rdata.code == "success") this.showSuccess = true;
      if(rdata.code == "fail") this.showFailure = true;
    });
  }

}
