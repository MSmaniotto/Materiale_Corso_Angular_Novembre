import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarAdderComponent } from './car-adder/car-adder.component';
import { FormsModule } from '@angular/forms'
import { CarProviderService } from '../services/car-provider.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [CarAdderComponent],
  imports: [
    CommonModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  exports:[CarAdderComponent],
  providers:[{provide:CarProviderService}]
})
export class CarAdderModule { }
