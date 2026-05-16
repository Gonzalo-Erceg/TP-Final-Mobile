import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/angular/standalone';


import { addIcons } from 'ionicons';

import{flashOutline,peopleOutline,settingsOutline}from 'ionicons/icons';



@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
  standalone: true,
  imports: [IonTabs,IonTabBar,IonTabButton,IonIcon,IonLabel, CommonModule, FormsModule]
})
export class HomeTabPage implements OnInit {

  constructor() { 
    addIcons({
      flashOutline,
      peopleOutline,
      settingsOutline
    })

  }

  ngOnInit() {
  }

}
