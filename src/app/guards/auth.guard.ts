import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';

import { ClienteService } from '../services/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private authService: ClienteService, private router: Router) { }
  canActivate() {

    if (this.authService.getCurrentUser()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;

    }

  }
  
}
