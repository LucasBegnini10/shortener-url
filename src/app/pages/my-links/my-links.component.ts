import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-my-links',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './my-links.component.html',
})
export class MyLinksComponent {
  title = 'My Links';
  description = 'This is a list of links that I have saved for later.';
  constructor() {}
}
