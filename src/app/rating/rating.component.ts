import { Component, Input } from '@angular/core';
import { Rating } from '../models/Rating';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating: Rating = new Rating(0, '');
  constructor(private dataService: DataserviceService) {}

  updateRating() {
    this.dataService.updateRating(this.rating);
  }
}
