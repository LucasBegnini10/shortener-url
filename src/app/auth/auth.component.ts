import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from './service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponseInterface } from './interface/auth.interface';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(
    private readonly authService: AuthService,
    private toastr: ToastrService
  ) {}
  MIN_LENGTH_PASSWORD = 6;

  isLoading = false;

  loginForm = new FormGroup({
    email: new FormControl('lucasbegnini.dev@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    pwd: new FormControl('Lucas123', [
      Validators.required,
      Validators.minLength(this.MIN_LENGTH_PASSWORD),
    ]),
    remember: new FormControl(false),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('pwd');
  }

  getEmailIsEmpty() {
    return this.email?.hasError('required');
  }

  getEmailIsInvalid() {
    return this.email?.hasError('email');
  }

  getPasswordIsEmpty() {
    return this.password?.hasError('required');
  }

  getPasswordMinLengthError() {
    return this.password?.hasError('minlength');
  }

  onSubmit() {
    const { email, pwd: password } = this.loginForm.value;
    if (this.loginForm.status === 'INVALID' || !email || !password) return;

    this.isLoading = true;
    this.authService
      .authService({ user: { email, password } })

      .subscribe({
        next: this.handleSuccessLogin.bind(this),
        error: this.handleErrorLogin.bind(this),
      });
  }

  handleErrorLogin(error: HttpErrorResponse) {
    this.isLoading = false;

    const defaultMessage = 'Error on login';

    if (!error?.status || typeof error.status !== 'number') {
      this.toastr.error(defaultMessage);
      return;
    }

    const mappingMessageErrorByStatus: { [key: number]: string } = {
      403: 'Invalid email or password',
    };

    const message = mappingMessageErrorByStatus[error.status] || defaultMessage;

    this.toastr.error(message);
  }

  handleSuccessLogin(data: Object){
    const user = data as AuthResponseInterface;
    this.isLoading = false;

    if(this.loginForm.value.remember){
      localStorage.setItem('token', user.user.token);
    }

    this.toastr.success('Login success');
  }
}
