import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { isAuthenticatedGuard } from './pages/auth/guard/is-authenticated.guard';

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
