import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films-menu',
  templateUrl: './films-menu.component.html',
  styleUrls: ['./films-menu.component.css']
})
export class FilmsMenuComponent implements OnInit {

  constructor(private FilmsAPI:FilmsService) { }

  films:any=[];

  ngOnInit(): void {
    this.refreshFilmsList();
  }
  
  refreshFilmsList(){
    this.FilmsAPI.getAllFilms().subscribe(data =>{ this.films = data});
  }
}
