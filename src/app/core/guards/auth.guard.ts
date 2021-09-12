import { AuthStatusService } from './../../shared/sevices/auth-status.service';
import { UsersService } from './../../shared/sevices/users.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private api: any;
  constructor(private $authSevice: AuthStatusService) {}

  /**
   * Method to check for auth status on route access
   * @param route <ActivatedRouteSnapshot>
   * @param state <RouterStateSnapshot>
   * @return true if authenticated or logout if not
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
      return this.$authSevice.curentStatus;
  }
}
