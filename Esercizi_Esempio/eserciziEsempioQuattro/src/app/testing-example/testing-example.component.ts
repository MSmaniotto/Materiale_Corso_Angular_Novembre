import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { User } from '../models/user';


@Component({
  selector: 'app-testing-example',
  templateUrl: './testing-example.component.html',
  styleUrls: ['./testing-example.component.css']
})
export class TestingExampleComponent implements OnInit {

  users:User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.all().subscribe(res => {
      this.users = <User[]>res;
    });
  }


}
