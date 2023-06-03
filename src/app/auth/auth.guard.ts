import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";

import { Observable } from "rxjs";
import { isLoggedIn } from "./auth.selector";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
;
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store,
    private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
              :Observable<boolean> {
                return this.store
                  .pipe(
                    select(isLoggedIn),
                    tap(loggedIn => {
                      if(!loggedIn) {
                        this.router.navigateByUrl('/login');
                      }
                    })
                  );
  }
}
