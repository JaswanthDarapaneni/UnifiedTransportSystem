import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonNav } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { welcomePage } from '../auth/welcome/welcome.page';

interface WelcomeNote {
  title: string;
  text: string;
  img: string;
  loading: string;
}

@Component({
  selector: 'app-welcome-note',
  templateUrl: './welcome-note.page.html',
  styleUrls: ['./welcome-note.page.scss'],
  standalone: true,
  imports: [IonNav, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WelcomeNotePage implements OnInit {
  title: any;
  img: any;
  text: any;
  loading: any;
  count = 0;

  private readonly localStorageKey = 'note';

  constructor(private _router: Router) {}

  ngOnInit() {
    // Check if the welcome note has already been viewed
    if (localStorage.getItem(this.localStorageKey) != null) {
      this.markAsViewed();
      this.redirect();
    } else {
      this.updateView();
    }
  }

  _content: WelcomeNote[] = [
    {
      title: 'Anywhere you are',
      img: "../../../../assets/welcome/w1.svg",
      text: "Sell houses easily with the help of Listeners and to make this line big I am writing more",
      loading: "../../../../assets/welcome/w2R.png"
    },
    {
      title: 'At anytime',
      img: "../../../../assets/welcome/w2.png",
      loading: "../../../../assets/welcome/w2R.png",
      text: "Sell houses easily with the help of Listeners and to make this line big I am writing more."
    },
    {
      title: 'Book your car',
      img: "../../../../assets/welcome/w3.png",
      loading: "../../../../assets/welcome/w3R.png",
      text: "Sell houses easily with the help of Listeners and to make this line big I am writing more"
    },
  ];

  updateContent() {
    this.count++;
    if (this.count < 3) {
      this.updateView();
    } else {
      this.markAsViewed();
      this.redirect();
    }
  }

  private updateView() {
    this.title = this._content[this.count].title;
    this.text = this._content[this.count].text;
    this.img = this._content[this.count].img;
    this.loading = this._content[this.count].loading;
  }

  private markAsViewed() {
    localStorage.setItem(this.localStorageKey, 'true');
  }

  protected redirect() {
    this.markAsViewed();
    this._router.navigate(['/auth']);
  }
}
