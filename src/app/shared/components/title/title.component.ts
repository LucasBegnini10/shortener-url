import { AfterViewInit, Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
})
export class TitleComponent implements AfterViewInit {
  @Input() title?: string;
  @Input() description?: string;

  constructor(private readonly titleService: Title) {}

  ngAfterViewInit(): void {
    this.titleService.setTitle(this.title || 'ShortnerUrl');
  }
}
