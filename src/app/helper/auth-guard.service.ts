import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { EmployeService } from '../service/employe.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanActivate {
  constructor(
    private router: Router,
    private authenticationService: EmployeService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/connexion'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
