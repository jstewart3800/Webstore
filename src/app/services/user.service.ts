import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArray: User[] = [
    {
      email: 'sampleemail@sample.sample',
      password: 'sample'
    }
  ]
  constructor() { }

  checkUserInfo(email: string, password: string): boolean {
    return email === this.userArray[0].email ? (password === this.userArray[0].password ? true : false) : false;
  }
}
