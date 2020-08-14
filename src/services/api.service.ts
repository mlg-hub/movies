import { Injectable } from '@angular/core';
import { apiToken, lang, baseApi } from 'src/utils/constants';
import { Observable } from 'rxjs';
import { IResponseGenre, IResponseMoviePopular, IResponseMovieTrending } from 'src/utils/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getGenres(): Observable<IResponseGenre> {
    const genreApi = `${baseApi}/genre/movie/list?api_key=${apiToken}&${lang}`;
    return this._http.get<IResponseGenre>(genreApi);
  }


  getTrendingMovies(): Observable<IResponseMovieTrending> {
    const trendingMovies = `${baseApi}/trending/movie/week?api_key=${apiToken}`;
    return this._http.get<IResponseMovieTrending>(trendingMovies);
  }

  getPopularMovies(): Observable<IResponseMoviePopular> {
    const defaultPage = 1;
    const moviePopular = `${baseApi}/movie/popular?api_key=${apiToken}&${lang}&page=${defaultPage}`;
    return this._http.get<IResponseMoviePopular>(moviePopular);
  }
}
