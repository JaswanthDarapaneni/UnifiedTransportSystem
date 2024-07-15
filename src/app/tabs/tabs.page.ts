import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonMenuToggle, IonMenuButton, IonMenu, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonRouterOutlet, IonText, IonItem, IonList, IonBackButton, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, heart, personCircleOutline, person, personCircle, heartCircle, trendingUp, trendingUpSharp, home, homeOutline, homeSharp, arrowBackOutline, settingsOutline, settings, helpCircle, peopleCircle, peopleOutline, personAdd, people, logOut, peopleSharp, peopleCircleOutline, personAddOutline, walk, helpBuoy } from 'ionicons/icons';
import { NavComponent } from './components/nav/nav.component';
import { menu, menu_list } from './menu';
import { tab, tab_list } from './tab_menu';
interface user {
  name: string;
  profile: string;
  number: string;
  email: string;
}
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonMenuToggle, IonButton, IonBackButton, IonList, IonItem, IonText, IonRouterOutlet, NavComponent, IonMenuButton, IonButtons, IonMenu, IonContent, IonTitle, IonToolbar, IonHeader, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],

})
export class TabsPage {
  user!: user;
  menu!: menu_list[];
  tab!: tab_list[];   
  viewName: string = 'Home';
  onClick(arg0: string) {
    this.viewName = arg0;
  }
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    this.init();
    addIcons({ compline: walk, logout: logOut, referral: peopleCircle, about: helpBuoy, settings: settings, help: helpCircle, back: arrowBackOutline, home: homeSharp, history: trendingUpSharp, heart: heart, person: person, triangle, ellipse, square });
  }

  init() {
    this.tab = tab;
    this.menu = menu;
    this.user = {
      email: "jaswanth@getMaxListeners.com",
      name: "jaswanth",
      number: "123456789",
      profile: "https://i.pravatar.cc/150?img=13"
    }
  }
}
