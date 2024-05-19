import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from '../../../pages/auth/store/auth.reducer';
import { Store, select } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowRightStartOnRectangle,
  heroLink,
  heroListBullet,
} from '@ng-icons/heroicons/outline';
import { logout } from '../../../pages/auth/store/auth.actions';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIconComponent, TabComponent],
  templateUrl: './header.component.html',
  viewProviders: [provideIcons({ heroArrowRightStartOnRectangle, heroLink, heroListBullet })],
})
export class HeaderComponent {
  $auth: Observable<AuthState>;
  tabs = [
    { label: 'Shortner', path: '/home', icon: "heroLink" },
    { label: 'My Links', path: '/home/my-links', icon: "heroListBullet" },
  ];

  constructor(
    private readonly store: Store<{ auth: AuthState }>,
    private readonly router: Router
  ) {
    this.$auth = this.store.pipe(select('auth'));
  }
  get username() {
    return this.$auth.pipe(map((authState) => authState.user?.username || ''));
  }

  get email() {
    return this.$auth.pipe(map((authState) => authState.user?.email || ''));
  }

  get image() {
    return this.$auth.pipe(map((authState) => authState.user?.image || ''));
  }

  handleLogout(): void {
    this.store.dispatch(logout());
    this.router.navigate(['/auth']);
  }

  tabIsActive(path: string): boolean {
    return this.router.url === path;
  }
}
