import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth");


export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user
)

// export const isLoggedOut = createSelector(
//   state => state["auth"],
//   // state => state["courses"],
//   (auth) => !auth.user
// )

export const isLoggedOut = createSelector(
 isLoggedIn,
  isLoggedIn => !isLoggedIn
)
