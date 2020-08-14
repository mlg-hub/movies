import { Component, OnInit } from '@angular/core';
import { IGenre, IResponseGenre } from 'src/utils/interfaces';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  allGenres: IGenre[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGenres().subscribe(
      (data: IResponseGenre) => {
        this.allGenres = data.genres;
      });
  }

}
