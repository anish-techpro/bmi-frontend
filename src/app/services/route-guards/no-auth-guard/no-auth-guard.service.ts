import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../../user/user.service';

@Injectable()
export class NoAuthGuardService implements CanActivate {

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.user.loggedIn().subscribe(
        res => {
          if (res) {
            resolve(false);
            this.router.navigate(['']);
          } else {
            resolve(true);
          }
        }
      );
    });
  }

}
