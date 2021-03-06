import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDeleteComponent } from './movie-delete/movie-delete.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { MoviesComponent } from './movies/movies.component';


const routes:Routes=[
  {path:'movies',component:MoviesComponent},
  {path:'movies/category/:categoryId',component:MoviesComponent},
  {path:'movies/create',component:MovieCreateComponent},
  {path:'movies/:movieId',component:MovieDetailsComponent},
  {path:'movies/:movieS/movies/delete/:movieD',component:MovieDeleteComponent},
  {path:'movies/update/:movieId',component:MovieUpdateComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'},
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
