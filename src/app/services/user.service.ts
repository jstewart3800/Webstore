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
    let potentialUser = this.userArray.find(x => email === x.email);
    if(potentialUser === undefined) {
      return false;
    } else {
      return email === potentialUser.email ? (password === potentialUser.password ? true : false) : false;
    }

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
