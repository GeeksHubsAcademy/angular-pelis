import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  peliculas=[];
  constructor(private movieService:MovieService) { }
  
  ngOnInit() {
    this.movieService.getDiscoverMovies()
    .subscribe(
      res=>this.peliculas=res['results'],
      error=>console.error(error)
    )
  }

}
