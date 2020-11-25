import { Routes } from '@angular/router';
// import { AuthGuard } from './autentificacion/guard/auth.guard';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      // {
      //   path: 'administracion',
      //   loadChildren: () =>
      //     import('./administracion/administracion.module').then(m => m.AdministracionModule)
      // },
      // {
      //   path: 'categorias',
      //   loadChildren: () =>
      //     import('./administracion-eventos/abm-categorias/categoria.module').then(
      //       m => m.CategoriaModule
      //     )
      // }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'autentificacion',
        loadChildren: () =>
          import('./autentificacion/autentificacion.module').then(m => m.AutentificacionModule)
      }
    ]
  },
  { path: '**', redirectTo: 'session/404' }
];
