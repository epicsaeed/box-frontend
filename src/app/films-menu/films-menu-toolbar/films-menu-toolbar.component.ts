import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmsMenuAddWindowComponent } from '../films-menu-add-window/films-menu-add-window.component';

@Component({
  selector: 'app-films-menu-toolbar',
  templateUrl: './films-menu-toolbar.component.html',
  styleUrls: ['./films-menu-toolbar.component.css']
})
export class FilmsMenuToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addFilmClicked():void{
    const dialogRef = this.dialog.open(FilmsMenuAddWindowComponent);
  }

}
