import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AutentificacionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
      }]
  }
];

export class AutentificacionRouting { }
