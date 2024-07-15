import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path:  '',
        redirectTo:'/tabs/home',
        pathMatch: 'full'
      },
      {
        path: "home",
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage)
      },
      {
        path: 'favorite',
        loadComponent: () => import('./pages/favorite/favorite.page').then( m => m.favoritePage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: 'history',
        loadComponent: () => import('./pages/history/history.page').then( m => m.HistoryPage)
      },
      
 
      
    ],
  },
  

];
