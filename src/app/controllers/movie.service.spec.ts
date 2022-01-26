import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpHeaders } from '@angular/common/http';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:movieApi@321')
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiURL: string = 'http://www.omdbapi.com/?apikey={key}';

  
  constructor(private httpClient: HttpClient) {
  }

  searchMovie(name: string) {
    return this.httpClient.get<any>(`${this.apiURL}&s=${name}`,httpOptions);
  }
}
