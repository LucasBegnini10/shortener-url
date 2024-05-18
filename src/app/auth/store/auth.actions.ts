import { createAction, props } from '@ngrx/store';
import { AuthLoggedInInterface } from '../interface/auth.interface';

export const auth = createAction(
  '[Auth Component] Auth',
  props<{ user: AuthLoggedInInterface }>()
);
export const logout = createAction('[Auth Component] Logout');
