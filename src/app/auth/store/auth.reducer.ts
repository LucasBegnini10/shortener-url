import { createReducer, on } from '@ngrx/store';
import { logout, auth } from './auth.actions';
import { AuthLoggedInInterface } from '../interface/auth.interface';

interface AuthState extends AuthLoggedInInterface {
  isLoggedIn: boolean;
}

export const initialState = {} as AuthState;

export const authReducer = createReducer(
  initialState,
  on(auth, (_state, { user }) => {
    return {
      ...user,
      isLoggedIn: true,
    };
  }),
  on(logout, (_state) => ({
    user: null,
    isLoggedIn: false,
  }))
);
