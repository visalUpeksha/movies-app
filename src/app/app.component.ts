import { Component } from '@angular/core';
import { MovieService } from './controllers/movie.service';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'movies-app';

  constructor(private movieService: MovieService) { }

  movies: Movie[] | undefined;
  imdbIds: string = 'tt9848626-tt2953050';

  ngOnInit(): void { 
    this.movieService.GetMovies(this.imdbIds).subscribe(result => {
      this.movies = result.Search;
    });
  }
}
