import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activate-disable-binding-show',
  templateUrl: './activate-disable-binding-show.component.html',
  styleUrls: ['./activate-disable-binding-show.component.css']
})
export class ActivateDisableBindingShowComponent {

  constructor() { }
  public showNow:boolean=true;
  public activeClass:string="text-success";
  public text:string="";
  public changeClass(str:string):void{
    this.activeClass=str;
  }
  public changeVisualization():void{
    this.showNow=!this.showNow;
  }
  

}
