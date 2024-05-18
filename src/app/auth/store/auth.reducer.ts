import { on } from '@ngrx/store';
import { logout, auth } from './auth.actions';
import { AuthLoggedInInterface } from '../interface/auth.interface';
import { createRehydrateReducer } from '../../utils/rehydrate-reducer';

interface AuthState extends AuthLoggedInInterface {
  isLoggedIn: boolean;
}

export const initialState = {} as AuthState;
export const KEY_AUTH = 'auth';

export const authReducer = createRehydrateReducer(
  KEY_AUTH,
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
