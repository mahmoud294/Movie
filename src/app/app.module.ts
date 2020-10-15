import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MoviesGridComponent } from './component/movies/movies-grid/movies-grid.component';
import { MoviesListComponent } from './component/movies/movies-list/movies-list.component';
import { MoviesDetailComponent } from './component/movies/movies-detail/movies-detail.component';
import { SeriesComponent } from './component/series/series.component';
import { SeriesGridComponent } from './component/series/series-grid/series-grid.component';
import { SeriesListComponent } from './component/series/series-list/series-list.component';
import { SeriesDetailComponent } from './component/series/series-detail/series-detail.component';
import { CelebritiesComponent } from './component/celebrities/celebrities.component';
import { CelebritiesDetailComponent } from './component/celebrities/celebrities-detail/celebrities-detail.component';
import { AccountComponent } from './component/account/account.component';
import { AuthComponent } from './component/auth/auth.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import {appRoutingModule} from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    MoviesGridComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    SeriesComponent,
    SeriesGridComponent,
    SeriesListComponent,
    SeriesDetailComponent,
    CelebritiesComponent,
    CelebritiesDetailComponent,
    AccountComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
