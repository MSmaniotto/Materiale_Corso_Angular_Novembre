import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable()
export class CarProviderService {

  constructor(private socket: Socket) { }

  public sendCar(car:Car) {
    console.log(car);
    this.socket.emit('car', car);
  }

  public getCars = () => {
    return new Observable((observer) => {
      this.socket.on('newCar', (car:Car) => {
        console.log("car");
          observer.next(car);
      });
    });
  }
}
