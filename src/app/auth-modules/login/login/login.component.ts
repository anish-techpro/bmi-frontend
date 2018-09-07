import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user_credentials = {
    email: '',
    password: ''
  };

  public remember_me = false;

  public error = {};

  constructor(
    private http: HttpClient,
    private user: UserService
  ) { }

  ngOnInit() {
  }
  
  login() {
    this.user.login(this.user_credentials, (err) => {
      this.error = err;
    });
  }

}
