import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Address } from './models/Address';
import { Rating } from './models/Rating';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private addressSource = new BehaviorSubject<Address>(new Address('','','','',''));
  private ratingSource = new BehaviorSubject<Rating>(new Rating(0,''));

  address$ = this.addressSource.asObservable();
  rating$ = this.ratingSource.asObservable();

  updateAddress(address: Address) {
    this.addressSource.next(address);
  }

  updateRating(rating: Rating) {
    this.ratingSource.next(rating);
  }

  
}
