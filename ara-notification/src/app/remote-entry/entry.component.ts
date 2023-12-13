import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'nx-micro-angular-ara-notification-entry',
  template: `<nx-micro-angular-nx-welcome></nx-micro-angular-nx-welcome>`,
})
export class RemoteEntryComponent {}
