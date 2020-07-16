import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private route:ActivatedRoute,private uiService:UiService) { }
   movie;
   Nill='N/A';
   searchSuccess(res){
     this.movie=res;
     console.log(res);
     console.log(this.movie);
   }
   searchError(err){
    console.log(err);
   }
   keys() : Array<string> {
    return Object.keys(this.movie);
  }
  ngOnInit(): void {
    let id=this.route.snapshot.params.imdbid;
    this.uiService.searchById(id).subscribe(res=>this.searchSuccess(res),err=>this.searchError(err))
  }

}
