import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterface } from '../interface/auth.interface';
import { KEY_AUTH } from '../store/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://api.realworld.io/api/users';

  constructor(private httpClient: HttpClient) {}

  authService(body: AuthInterface) {
    return this.httpClient.post(`${this.url}/login`, body);
  }

  userIsAuthenticated() {
    const authInStorage = localStorage.getItem(KEY_AUTH);
    if (!authInStorage) return false;

    const authJson = JSON.parse(authInStorage);
    return authJson.user.token ? true : false;
  }
}
