import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../pages/auth/auth.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

/**
 * * Provides the `LoginGuard` service as a root-level injectable service.
 * This ensures the `LoginGuard` can be injected and used throughout the application.
 * The `LoginGuard` service is responsible for controlling access to routes in the application based on the user's authentication status.
 *
 * It implements the `CanActivate` interface, which allows it to be used as a route guard. The `canActivate` method is called by the Angular Router whenever a route is about to be activated.
 *
 * If the user is logged in, the guard checks the current URL. If the URL includes '/auth' or '/welcome', the user is redirected to the '/tabs' page. Otherwise, the user is allowed to access the current page.
 *
 * If the user is not logged in, the guard checks the current URL. If the URL includes '/tabs', the user is redirected to the '/welcome' page. Otherwise, the user is allowed to access the current page.
 *
 * @param route The current activated route snapshot.
 * @param state The current router state snapshot.
 * @returns `true` if the user is allowed to access the current page, `false` otherwise.
*/
@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private auth_service: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth_service.isLoggedIn()) {
      if (state.url.includes('/auth') || state.url.includes('/welcome')) {
        this.router.navigate(['/tabs']);
        return false;
      }
      return true;
    } else {
      if (state.url.includes('/tabs')) {
        this.router.navigate(['/welcome']);
        return false;
      }
      return true;
    }
  }
}