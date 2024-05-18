import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterface } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://api.realworld.io/api/users';

  constructor(private httpClient: HttpClient) {}

  authService(body: AuthInterface){
    return this.httpClient.post(`${this.url}/login`, body);
  }
}
