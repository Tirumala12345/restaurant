import { Component } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { Address } from '../models/Address';
import { Rating } from '../models/Rating';
import { DataserviceService } from '../dataservice.service';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrl: './addrestaurant.component.css'
})
export class AddrestaurantComponent {
 
  restaurant=new Restaurant('',new Address('','','','',''),new Rating(0,''));


  constructor(private dataService: DataserviceService,private restaurantService: RestaurantService) {
    this.dataService.address$.subscribe((address: Address) => 
      this.restaurant.address = address);


    this.dataService.rating$.subscribe((rating: Rating) => 
      this.restaurant.rating = rating);
  }

  addRestaurant() :void{
    console.log("From Restaurant" +JSON.stringify(this.restaurant))
    this.restaurantService.addRestaurant(this.restaurant)
    .subscribe(
      response => {
        console.log('Restaurant added successfully', response);
      },
      error => {
        console.error('Error adding restaurant', error);
      }
    );
}
    
  
}
