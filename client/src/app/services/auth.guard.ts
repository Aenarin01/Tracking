import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean >  {
    if (this.auth.isAuthenticated()) {
      return of(true)
    } else {
      this.router.navigate(['/auth/login'], {
        queryParams: {
          accessDenied: true
        }
      })
      return of(false)
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean >  {
    return this.canActivate(route, state)
  }
}
