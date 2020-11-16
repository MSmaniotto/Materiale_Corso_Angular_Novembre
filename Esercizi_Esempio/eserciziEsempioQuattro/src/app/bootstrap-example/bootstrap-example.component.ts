import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-example',
  templateUrl: './bootstrap-example.component.html',
  styleUrls: ['./bootstrap-example.component.css']
})
export class BootstrapExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public people=[
    {
      "name":"Enrico",
      "age": 45
    },
    {
      "name":"Francesca",
      "age": 37
    },
    {
      "name":"Piero",
      "age": 46
    },
    {
      "name":"Sebastiano",
      "age": 29
    }
  ];

  public products=[
    {
      "productName":"chair",
      "price":60
    },
    {
      "productName":"balloon",
      "price":10
    },
    {
      "productName":"table",
      "price":70
    },
    {
      "productName":"ufo",
      "price":9000000000000000000000
    }
  ]

}
