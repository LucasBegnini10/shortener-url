import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  @Input() title?: string;
  @Input() description?: string;

  constructor() {}
}
