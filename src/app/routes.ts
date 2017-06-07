import { Route } from '@angular/router';
import { SignupComponent } from './login-form/signup/signup.component';
import { LoginComponent } from './login-form/login/login.component';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    children: [
      {
        path: '',
        component: SignupComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'signup',
    pathMatch: 'full'
  }
];
