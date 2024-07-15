import { Routes } from '@angular/router';
import { welcomePage } from './welcome/welcome.page';

export const routes: Routes = [
    {
        path: '',
        component: welcomePage,
        pathMatch: 'full',
    },
    {
        path: "signup",
        loadComponent: () => import('./signup/signup.page').then((m) => m.SignupPage),
    },
    {
        path: "signin",
        loadComponent: () => import('./signin/signin.page').then((m) => m.SigninPage),
    },
    {
        path: 'verification',
        loadComponent: () => import('./verification/verification.page').then(m => m.VerificationPage)
    },
    {
        path: "welcome",
        loadComponent: () => import('./welcome/welcome.page').then((m) => m.welcomePage),
    },
    {
        path: 'setpassword',
        loadComponent: () => import('./setpassword/setpassword.page').then(m => m.SetPasswordPage)
    },  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },



]


