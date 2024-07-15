import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/angular/standalone';
import { LoginGuard } from './authentication/authguards/loginguard';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonApp, IonRouterOutlet,],
  providers: [LoginGuard]
})
export class AppComponent {
  constructor() {
    localStorage.removeItem('note')
  }
}
