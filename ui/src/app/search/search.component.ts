import { Component, OnInit } from '@angular/core';
import {UiService} from '../ui.service';
import {  HttpClient } from '@angular/common/http';
import{ Observable}from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  movies=[];
  constructor(private uiService:UiService ) { }
 
MovieTitle:string;
  searchSuccess(res)
  {
    this.movies=res.Search;
    console.log(this.movies);
  }
  searchError(err)
  {
    console.log(err);
  }
  ngOnInit(): void {
    this.MovieTitle=this.uiService.MovieTitle;
    this.uiService.searchmovies().subscribe(res=>this.searchSuccess(res),err=>this.searchError(err))

  }
  search()
  {
    this.uiService.MovieTitle=this.MovieTitle;
    this.uiService.searchmovies().subscribe(res=>this.searchSuccess(res),err=>this.searchError(err))
  }

}
