import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private uService: UserService) { }

  ngOnInit() {
  }

  logIn(email, password) {
    if(this.uService.checkUserInfo(email, password)) {
      alert('You are logged in!');
    } else {
      alert('Invalid login. Try again.')
    }
  }

}
