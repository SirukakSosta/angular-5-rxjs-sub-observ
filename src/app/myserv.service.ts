import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class MyservService {
  // bima 1 dimourgo ena variable user 
  // pou einai tha ine object behaviosubject
  private user = new BehaviorSubject<string>('john');
  cast = this.user.asObservable();

  constructor() { }

  editUser(newUser){
    this.user.next(newUser);
  }
}
