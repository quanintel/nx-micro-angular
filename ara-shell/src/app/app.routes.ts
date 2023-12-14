import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import {MenuNotificationComponent} from "./menu-notification-component/menu-notification.component";

export const appRoutes: Route[] = [
  {
    path: 'ara-notification',
    loadChildren: () =>
      import('ara-notification/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'ara-menu',
    loadComponent: () => import('ara-menu/Component').then((m) => m.MenuComponent),
  },
  {
    path: '',
    component: MenuNotificationComponent,
  },
];
