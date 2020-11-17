import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarProviderService } from 'src/app/services/car-provider.service';

@Component({
  selector: 'app-car-adder',
  templateUrl: './car-adder.component.html',
  styleUrls: ['./car-adder.component.css']
})
export class CarAdderComponent implements OnInit {

  constructor(private service:CarProviderService) { }

  ngOnInit(): void {
    this.service.getCars().subscribe((car:Car)=>{
      this.carList.push(car);
    },
    error => console.log(error),
    () => console.log("done")
    )
  }

  newCar:Car=new Car();
  carList:Car[]=[];

  public inviaForm(){
    this.service.sendCar(this.newCar);
    this.newCar=new Car();
  }

}
