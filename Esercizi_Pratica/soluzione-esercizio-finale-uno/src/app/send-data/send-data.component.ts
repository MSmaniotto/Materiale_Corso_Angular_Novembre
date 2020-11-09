import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.css']
})
export class SendDataComponent {

  constructor() { }
  public activeClass:string="text-success";
  public text:string="";
  public changeClass(str:string):void{
    this.activeClass=str;
  }
  public sendData(str:string){
    this.text=str;
  }

}
