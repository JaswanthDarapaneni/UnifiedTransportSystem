import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonMenu, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
  standalone: true,
  imports: [IonMenu, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class favoritePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
