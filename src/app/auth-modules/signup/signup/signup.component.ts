import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email = '';

  public error = {};

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
  }

  signup() {
    this.user.signup(this.email, err => {
      this.error = err;
    });
  }

}
