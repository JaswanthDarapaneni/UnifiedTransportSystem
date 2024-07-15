import { Routes } from '@angular/router';

/**
 * Defines the routes for the authentication pages.
 * 
 * The first route redirects the user to either the '/auth' path if a 'note' item exists in localStorage, or the '_note' path if it does not.
 * 
 * The second route loads the 'WelcomeNotePage' component when the '_note' path is accessed.
 */
export const routes: Routes = [
      {
        path: "",
        redirectTo: () => localStorage.getItem('note') !== null ? '/auth' : '_note',
        pathMatch: 'full'
      },    
      {
        path: "_note",
        loadComponent: () => import('./welcome-note/welcome-note.page').then((m) => m.WelcomeNotePage)
      },
];
