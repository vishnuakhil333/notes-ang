import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GalleryApiService implements OnInit{
  key = "?api_key=95d5fc63894b28e0616f7a582bddf9f5&language=en-US&page=1";
  api_name = 'https://api.themoviedb.org/3';
  // id:string;

  constructor(private http: HttpClient ) { }
  ngOnInit() {
    
  }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/550/similar?api_key=95d5fc63894b28e0616f7a582bddf9f5&language=en-US&page=1');
  }
  getMovieDetails(id: string) {
    return this.http.get(this.api_name+'/movie/'+id+this.key);
  }
  getReviews(id: string) {
    return this.http.get(this.api_name+'/movie/'+id+'/reviews'+this.key);
  }
}
