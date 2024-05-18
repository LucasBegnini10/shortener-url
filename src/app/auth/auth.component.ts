import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor() {}

  optionsAuth = [
    {id: 'apple', name: 'Apple', image: 'assets/logos/apple.png'},
    {id: 'google', name: 'Google', image: 'assets/logos/google.png'},
    {id: 'github', name: 'Github', image: 'assets/logos/github.png'},
  ]

}
