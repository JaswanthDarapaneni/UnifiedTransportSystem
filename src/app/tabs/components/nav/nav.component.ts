import { Component, OnInit } from '@angular/core';
import { IonContent, IonTabButton, IonLabel, IonIcon, IonTabBar, IonTabs, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonTabs, IonTabBar, IonIcon, IonLabel, IonTabButton, ],
})
export class NavComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
