import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor() {}

  MIN_LENGTH_PASSWORD=6;

  optionsAuth = [
    { id: 'apple', name: 'Apple', image: 'assets/logos/apple.png' },
    { id: 'google', name: 'Google', image: 'assets/logos/google.png' },
    { id: 'github', name: 'Github', image: 'assets/logos/github.png' },
  ];

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(this.MIN_LENGTH_PASSWORD)]),
    remember: new FormControl(false)
  });

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('pwd')
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

  onSubmit(){
    if(this.loginForm.status === "INVALID") return;

    console.log(this.loginForm.value)


  }
}
