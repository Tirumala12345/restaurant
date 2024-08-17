import { Component, Input } from '@angular/core';
import { Address } from '../models/Address';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  @Input() 
  address: Address = new Address('','','','','');

  constructor(private dataService: DataserviceService) {}

  updateAddress() {
    this.dataService.updateAddress(this.address);
  }
}
