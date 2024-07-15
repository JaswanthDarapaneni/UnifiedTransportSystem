import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonMenu,IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonSegment, IonSegmentButton, IonSearchbar, IonIcon, IonButtons, IonRippleEffect } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locate } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonMenu, IonRippleEffect, IonMenuButton,IonButtons, IonIcon, IonSearchbar, IonSegmentButton, IonSegment, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({
      locate:locate
    })
   }

  ngOnInit() {
  }

}
