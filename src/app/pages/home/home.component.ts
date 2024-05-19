import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainLayoutComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
