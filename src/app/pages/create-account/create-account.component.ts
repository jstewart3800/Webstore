import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private uService: UserService) { 
    uService.getLocalUsers();
  }

  ngOnInit() {
  }
  //fn.value,ln.value,ea.value,pw.value,cpw.value
  createAccount(fn: string, ln: string, e: string, pw: string, cpw: string) {
    if (pw === cpw && pw.length > 4) {
      if (this.uService.checkIfUserExists(e)) {
        alert('An account with this email address already exists. Please log in or try another email address.')
      } else {
        let userToBeAdded: User = {
          firstName: fn,
          lastName: ln,
          email: e,
          password: pw
        }
        this.uService.addUser(userToBeAdded);
      }

    } else {
      alert('Your password either is too short or was not confirmed properly. Please try again.')
    }
  }

}
