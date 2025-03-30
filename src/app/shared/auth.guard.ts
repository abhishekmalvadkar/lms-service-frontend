import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.get('token');
  let isAuthenticated = false;
  if(token){
    isAuthenticated = true;
  }
  if (!isAuthenticated) {
    localStorage.setItem('redirectAfterLogin', state.url); // Save attempted URL
    router.navigate(['/sign-in']);
    return false;
  }
  return true;
};
