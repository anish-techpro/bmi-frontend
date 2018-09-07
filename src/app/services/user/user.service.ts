import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  public info = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get role() {
    if (this.info) {
      switch (this.info.type) {
        case '1': return 'super-admin';
        case '2': return 'admin';
        case '3': return 'alumni';
        case '4': return 'teacher';
        case '5': return 'student';
      }
    }
    return '';
  }

  loggedIn() {
    return Observable.create(obs => {
      const token = localStorage.getItem('access_token');
      if (token) {
        if (this.info) {
          obs.next(true);
          return;
        }
        this.http.get('/auth/me').subscribe(
          (res: any) => {
            this.info = res;
            obs.next(true);
          },
          err => {
            obs.next(false);
            localStorage.removeItem('access_token');
          }
        );
      } else {
        obs.next(false);
      }
    });
  }

  login(user_credentials, callback = null) {
    this.http.post('/auth/login', user_credentials).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.access_token);
        this.info = res.user;
        this.router.navigate(['']);
      },
      err => {
        callback && callback(err);
      }
    )
  }

  signup(email, callback = null) {
    const payload = { email };
    this.http.post('/auth/register', payload).subscribe(
      res => {
        swal('Great!', 'You are now registered!', 'success');
        this.router.navigate(['login']);
      },
      err => {
        callback && callback(err)
      }
    );
  }

  logout() {
    this.http.post('/auth/logout', {}).subscribe(
      res => {
        this.info = null;
        localStorage.removeItem('access_token');
        this.router.navigate(['login']);
      },
      console.log
    );
  }

  getUserDetails() {
    if (this.loggedIn) {

    }
  }

}
