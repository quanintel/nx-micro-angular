import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ara-notification',
    loadChildren: () =>
      import('ara-notification/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'ara-menu',
    loadChildren: () => import('ara-menu/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
