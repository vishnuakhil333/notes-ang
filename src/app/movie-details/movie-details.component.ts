import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryApiService } from '../gallery-api.service';
// import { StarRatingColor } from './star-rating/star-rating.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie;
  id: string;
  review;
  rating:number = 3;
  starCount:number = 5;
  // starColor:StarRatingColor = StarRatingColor.accent;
  // starColorP:StarRatingColor = StarRatingColor.primary;
  // starColorW:StarRatingColor = StarRatingColor.warn;

  constructor(private service: GalleryApiService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    });
    this.service.getMovieDetails(this.id).subscribe((result:any) => {
      this.movie = result
      console.log(result)
    }
    );
    this.service.getReviews(this.id).subscribe((result:any) => {
      this.review = result
      console.log(result)
    })
  }

  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }

}
