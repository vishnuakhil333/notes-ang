import { Component, OnInit } from '@angular/core';
import { GalleryApiService } from '../gallery-api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  movies;
  constructor(private service: GalleryApiService) { }

  ngOnInit() {
    this.service.getMovieDetails().subscribe((result : any) => {
      this.movies = result.results;
      console.log(result);
    });
  }

}
