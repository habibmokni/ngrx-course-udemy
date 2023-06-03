import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  State
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';
// import { environment } from '../../environments/environment';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: undefined
}

// function authReducer(state, action): AuthState<> {}

export const authReducer = createReducer(
initialAuthState,
on(AuthActions.login, (state, action) => {
  console.log("CALLING LOGIN REDUCER");

  // debugger;

  return {
    user: action.user
  }
})
)

// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
