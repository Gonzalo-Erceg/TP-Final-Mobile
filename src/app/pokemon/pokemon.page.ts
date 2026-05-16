import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/angular/standalone';




@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [ IonHeader,IonToolbar,IonTitle,IonContent,CommonModule, FormsModule,IonCard, IonCardTitle, IonCardContent,IonCardHeader,IonCardSubtitle]
})
export class PokemonPage  implements OnInit {

  constructor() {}

  ngOnInit() {}

}
/*
import { IonContent, IonHeader, IonTitle, IonCard, IonCardTitle, IonCardContent, IonToolbar } from '@ionic/angular/standalone';
IonContent, IonHeader, IonTitle, IonToolbar,
*/