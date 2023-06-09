import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { AuthState } from './auth/reducers';
import { state } from '@angular/animations';
import { isLoggedIn, isLoggedOut } from './auth/auth.selector';
import { logout } from './auth/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading = true;

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<AuthState>) {}

  ngOnInit() {

    this.router.events.subscribe(event  => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

    // this.store.subscribe(state => { console.log("current Store value:",state)});

    // Query the store data ow.
    // this.isLoggedIn$ = this.store
    //   .pipe(
    //     map( state => !!state["auth"].user)
    //   )

    // this.isLoggedOut$ = this.store
    // .pipe(
    //   map( state => !state["auth"].user)
    // )

    this.isLoggedIn$ = this.store
      .pipe(
       select(isLoggedIn)
      )

    this.isLoggedOut$ = this.store
    .pipe(
      select(isLoggedOut)
    )
  }

  logout() {
    this.store.dispatch(logout());

  }

}
