import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.services';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css'] ,
  providers:[CategoryService,MovieService]
})
export class MovieUpdateComponent implements OnInit {

  movie:Movie;
  categories:Category[];

  constructor(private movieService:MovieService,private categoryService:CategoryService,private alertifyService:AlertifyService,
    private router:Router,
              private activatedRouted:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouted.params.subscribe(params=>{
      this.movieService.getMovieById(params["movieId"])
      .subscribe(data=>{
        this.movie=data;
      })
    })
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    });
  }
  createMovie(title:any,description:any,imageUrl:any,categoryId:any){
    if(title.value==""){
      this.alertifyService.error("you should write a title");
      return;
    }
    if(title.value.length<5){
      this.alertifyService.warning("you should write at least 5 characters");
      return;
    }
    if(description.value==""){
      this.alertifyService.error("you should write a description");
      return;
      
    }
    if(imageUrl.value==""){
      this.alertifyService.error("you should write an image url");
      return;
      
    }
    const movie = {
      id:this.movie.id,
      title:title.value,
      description:description.value,
      imageUrl:imageUrl.value,
      isPopular:false,
      datePublished:new Date().getTime(),
      categoryId:categoryId.value
    };

      this.movieService.updateMovie(movie)
      .subscribe(data=>this.router.navigate(['/movies',data.id]));


  }

}