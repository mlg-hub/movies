import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/components/header/header.component';
import { SearchComponent } from './components/home/components/search/search.component';
import { GenresComponent } from './components/home/components/genres/genres.component';
import { TrendingsComponent } from './components/home/components/trendings/trendings.component';
import { FooterComponent } from './components/home/components/footer/footer.component';
import { TrendingComponent } from './components/home/components/trendings/trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    GenresComponent,
    TrendingsComponent,
    FooterComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
