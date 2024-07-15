import { Routes } from '@angular/router';
import { LoginGuard } from './authentication/authguards/loginguard';

/**
 * Defines the main application routes, including the tabs, welcome, and authentication routes.
 * The `LoginGuard` is used to protect the routes that require authentication.
 * The root path redirects to the 'welcome' route, and any unmatched paths also redirect to 'welcome'.
 */
export const routes: Routes = [
  {
    path: 'tabs',
    canActivate: [LoginGuard],
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'welcome',
    canActivate: [LoginGuard],
    loadChildren: () => import('./authentication/pages/page.routes').then((m) => m.routes)
  },
  {
    path: 'auth',
    canActivate: [LoginGuard],
    loadChildren: () => import('./authentication/pages/auth/auth.routes').then((m) => m.routes)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'welcome',
  }
];
