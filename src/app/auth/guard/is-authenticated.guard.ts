import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const userIsAuthenticated = inject(AuthService).userIsAuthenticated();

  if (userIsAuthenticated) return true;

  router.navigate(['/auth']);
  return false;
};
