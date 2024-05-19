import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-shortener',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './shortener.component.html',
})
export class ShortenerComponent {
  title = 'Shortener';
  description = 'Shorten your URLs with ease!';
}
