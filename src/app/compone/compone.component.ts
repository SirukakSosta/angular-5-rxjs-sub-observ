import { Component, OnInit } from '@angular/core';
import {MyservService} from '../myserv.service';
@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.css']
})
export class ComponeComponent implements OnInit {
  user:string;
  editUser:string;
  constructor(private usersService:MyservService) { }

  ngOnInit() {
    this.usersService.cast.subscribe(user=> this.user = user);
  }

  editTheUser(){
    this.usersService.editUser(this.editUser);
  }
}

