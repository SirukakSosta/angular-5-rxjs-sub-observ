import { Component, OnInit } from '@angular/core';
import {MyservService} from '../myserv.service';
@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.css']
})
export class ComptwoComponent implements OnInit {
  user:string;
  editUserr:string;
  constructor(private usersService:MyservService) { }

  ngOnInit() {
    this.usersService.cast.subscribe(user=> this.user = user);
  }
  editTheUserr(){
    this.usersService.editUser(this.editUserr);
  }
}
