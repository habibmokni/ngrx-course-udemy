import { createSelector } from "@ngrx/store";

export const isLoggedIn = createSelector(
  state => state["auth"],
  // state => state["courses"],
  (auth) => !!auth.user
)

// export const isLoggedOut = createSelector(
//   state => state["auth"],
//   // state => state["courses"],
//   (auth) => !auth.user
// )

export const isLoggedOut = createSelector(
 isLoggedIn,
  (isLoggedIn) => !isLoggedIn
)
