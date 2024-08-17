import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl='http://localhost:8081/api/restaurants';

  constructor(private http: HttpClient) { }

  addRestaurant(restaurant: Restaurant): Observable<Object> {
    const httpOptions ={
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'Accept': 'application/json'
       })
     };
     return this.http.post(this.apiUrl,restaurant,httpOptions)
  }
}
