import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css'],
  providers:[MovieService]
})
export class MovieDeleteComponent implements OnInit {
  movie:Movie;

  constructor(private movieService:MovieService,
    private activatedRouted:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    // this.activatedRouted.params.subscribe(params=>{
    //   this.movieService.getMovieById(params["movieId"])
    //   .subscribe(data=>{
    //     this.movie=data;
    //   })
    // })
    // this.movieService.deleteMovie(this.movie)
    //   .subscribe(data=>this.router.navigate(['/movies']));
  }

}
