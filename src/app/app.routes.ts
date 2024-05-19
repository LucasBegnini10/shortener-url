import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { isAuthenticatedGuard } from './auth/guard/is-authenticated.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [isAuthenticatedGuard],
    children: [],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
