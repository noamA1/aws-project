import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {
  isconnected;
  constructor(public auth: AuthService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.auth.isloggedin().subscribe(data => {
        this.isconnected = data
        if (this.isconnected.message) {
          this.router.navigate(['/dashboard'])
        }
      })
      return true;
  }
  
}
