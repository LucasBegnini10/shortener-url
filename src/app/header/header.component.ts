import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from '../auth/store/auth.reducer';
import { Store, select } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRightStartOnRectangle } from '@ng-icons/heroicons/outline';
import { logout } from '../auth/store/auth.actions';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './header.component.html',
  viewProviders: [provideIcons({ heroArrowRightStartOnRectangle })],
})
export class HeaderComponent {
  $auth: Observable<AuthState>;

  constructor(
    private readonly store: Store<{ auth: AuthState }>,
    private readonly router: Router
  ) {
    this.$auth = this.store.pipe(select('auth'));
  }
  get username() {
    return this.$auth.pipe(map(authState => authState.user?.username || ''));
  }

  get email() {
    return this.$auth.pipe(map(authState => authState.user?.email || ''));
  }

  get image() {
    return this.$auth.pipe(map(authState => authState.user?.image || ''));
  }

  handleLogout(): void {
    this.store.dispatch(logout());
    console.log("call")
    this.router.navigate(['/auth']);
  }
}
