import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { isAuthenticatedGuard } from './pages/auth/guard/is-authenticated.guard';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'home',
    canActivate: [isAuthenticatedGuard],
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/shortener/shortener.component').then((m) => m.ShortenerComponent),
      },
      {
        path: 'my-links',
        loadComponent: () =>
          import('./pages/my-links/my-links.component').then(
            (m) => m.MyLinksComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
