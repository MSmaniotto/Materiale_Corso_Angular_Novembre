import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent{
  
  @Input('parentData') public importedCar:Car;
  constructor() { }

}
