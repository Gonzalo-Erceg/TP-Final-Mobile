import { Component, OnInit } from '@angular/core';
import type { Usuario } from '../example/example.page';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonAlert,
} from '@ionic/angular/standalone';
import { Input } from '@angular/core';

@Component({
  selector: 'item-card',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonAlert,
  ],
})
export class ItemComponent implements OnInit {
  @Input() data: any;

  @Input() ejemplo: string = '';
  public abierto = false;
  constructor() {}
  ShowAlert(seteo: boolean) {
    this.abierto = seteo;
  }
  ngOnInit() {}
}
