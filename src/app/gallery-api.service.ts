import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GalleryApiService {
  key = "95d5fc63894b28e0616f7a582bddf9f5";

  constructor(private http: HttpClient ) { }

  getMovieDetails() {
    return this.http.get('https://api.themoviedb.org/3/movie/550/similar?api_key=95d5fc63894b28e0616f7a582bddf9f5&language=en-US&page=1');
  }
}
