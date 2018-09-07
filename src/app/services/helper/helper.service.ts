import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Location } from '@angular/common';

@Injectable()
export class HelperService {

  constructor(
    private router: Router,
    private user: UserService,
    private location: Location
  ) { }

  get baseRoute() {
    // console.log(this.router.url);
    return `/${this.user.role}`;
  }

  navigateBack() {
    this.location.back();
  }

}
