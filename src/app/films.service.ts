import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private _http:HttpClient) { }

  private _APIurl = "http://localhost:8080/films";

  //Returns an array of all films
  getAllFilms():Observable<any[]>{
    return this._http.get<any>(this._APIurl);
  }

  //returns poster of passed film title
  getFilmPoster(title:String):Observable<any>{
    return this._http.get(this._APIurl+"/posters/"+title);
  }

  //sends film to rest API
  addNewFilm(film:any):Observable<any>{
    return this._http.post(this._APIurl + "/add",film);
  }

  //deletes film from database
  deleteFilm(title:String):Observable<any>{
    return this._http.get(this._APIurl + "/delete/"+title);
  }

}
