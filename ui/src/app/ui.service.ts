import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  MovieTitle:string;
  imdbid:string;
  searchmovies():Observable<any>{
     if(this.MovieTitle===undefined || this.MovieTitle===null){this.MovieTitle='';}
    const url='http://localhost:3000/omdb/search?title='+this.MovieTitle;
    return this.http.get(url);
  }
  searchById(id):Observable<any>{
    const url='http://localhost:3000/omdb/result/'+id;
    return this.http.get(url);
  }
  constructor(private http:HttpClient) { }
}
