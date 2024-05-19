import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @Input() label?: string;
  @Input() active = false;
  @Input() path?: string;

  constructor(private readonly router: Router) {}

  handleClickTab() {
    this.router.navigate([this.path]);
  }
}
