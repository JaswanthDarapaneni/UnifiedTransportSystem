import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNav, IonNavLink } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
interface welcomeNote {
  title: string;
  text: string;
  img: string;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonNavLink, IonNav, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class welcomePage {
  _content: welcomeNote[] = [
    {
      title: 'Welcome',
      img: "../../../../assets/welcome/login.png",
      text: "Have a better sharing experience",
    },
  ]
  protected SIGNUP: any = 1;
  protected SIGNIN: any = 2;

  constructor(private _router: Router) { }

  navigate_signin() {
    this._router.navigate(['/auth/signin']);
  }
  navigate_signup() {
    this._router.navigateByUrl('/auth/signup');
  }

}
