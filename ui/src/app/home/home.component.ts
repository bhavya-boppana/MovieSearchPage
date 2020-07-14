import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  MovieTitle:string;
  constructor(private uiService:UiService, private router:Router) { }
  search()
  {
     
     console.log(this.MovieTitle);
     this.uiService.MovieTitle=this.MovieTitle;
     this.router.navigate(['/search']);
  }
  ngOnInit(): void {
  }

}
