import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'contador',
        loadChildren: () => import('./component/contador/contador.module').then(m => m.ContadorModule)
      },
      {
        path: 'basic-example',
        loadChildren: () => import('./component/ngrx-basic-example/ngrx-basic-example.module').then(m => m.NgrxBasicExampleModule)
      },
      {
        path: 'todo-app',
        loadChildren: () => import('./component/todo-app/todo-app.module').then(m => m.TodoAppModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
