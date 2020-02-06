import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArray: User[] = [
    {
      firstName: 'Sample', lastName: 'Sampleton', email: 'sampleemail@sample.sample', password: 'sample'
    }
  ]
  constructor() { }

  checkUserInfo(email: string, password: string): boolean {
    return email === this.userArray[0].email ? (password === this.userArray[0].password ? true : false) : false;
  }

  checkIfUserExists(email: string): boolean {
    let result = false;
    if(this.userArray.find( x => email.toLowerCase() === x.email) !== undefined){
      result = true;
    };
    return result;
  }

  addUser(userToBeAdded: User) {
    this.userArray.push(userToBeAdded);
  }
}
