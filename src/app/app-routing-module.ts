import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {CelebritiesComponent} from './component/celebrities/celebrities.component';
import {SeriesComponent} from './component/series/series.component';
import {MoviesComponent} from './component/movies/movies.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './component/auth/login/login.component';
import {RegisterComponent} from './component/auth/register/register.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path:'celeb',component: CelebritiesComponent},
  {path: 'movie',component: MoviesComponent},
  {path: 'series',component: SeriesComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})

export class appRoutingModule {

}
