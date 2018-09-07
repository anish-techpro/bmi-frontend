import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.user.role);
    if (route.url.length === 0 || route.url[0].path !== this.user.role) {
      this.router.navigate([this.user.role]);
      return false;
    } else {
      return true;
    }
  }

}
