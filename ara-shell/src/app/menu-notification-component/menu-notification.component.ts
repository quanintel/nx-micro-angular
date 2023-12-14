import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "ara-menu/Component";

@Component({
  selector: 'nx-micro-angular-menu-notification',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './menu-notification.component.html',
  styleUrl: './menu-notification.component.scss',
})
export class MenuNotificationComponent {}
