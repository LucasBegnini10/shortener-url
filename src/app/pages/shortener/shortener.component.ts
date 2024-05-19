import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/components/title/title.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShortenerService } from './service/shortener.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowPath } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-shortener',
  standalone: true,
  imports: [TitleComponent, CommonModule, FormsModule, NgIconComponent],
  templateUrl: './shortener.component.html',
  viewProviders: [provideIcons({heroArrowPath})],
})
export class ShortenerComponent {
  title = 'Shortener';
  description = 'Shorten your URLs with ease!';
  url?: string;
  shortUrl?: string;
  loading = false;

  constructor(private readonly shortenerService: ShortenerService) {}

  onSubmit() {
    if (!this.urlIsValid()) return;
    this.loading = true;
    this.shortenerService.shortenUrl(this?.url || '').subscribe((data) => {
      console.log('data =>', data);
      this.loading = false;
      this.url = '';
    });
  }

  urlIsValid() {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      this.url || ''
    );
  }
}
