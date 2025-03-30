import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

export const authRedirectGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.get('token');
  if (token) {
    router.navigate(['/']); // Redirect to HomeComponent (loads link list)
    return false;
  }

  return true; // Allow navigation if not authenticated
};
