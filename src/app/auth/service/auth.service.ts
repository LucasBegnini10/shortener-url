import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthInterface,
} from '../interface/auth.interface';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://api.realworld.io/api/users';

  constructor(
    private httpClient: HttpClient,
    private readonly store: Store<{ auth: AuthState }>
  ) {}

  authService(body: AuthInterface) {
    return this.httpClient.post(`${this.url}/login`, body);
  }

  userIsAuthenticated() {
    const authInStore = this.store.select('auth');

    let isAuthtenticated = false;
    authInStore.subscribe((auth) => {
      isAuthtenticated = Boolean(auth.isLoggedIn && auth?.user?.token);
    });

    return isAuthtenticated;
  }
}
