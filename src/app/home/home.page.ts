import { TypeBadgeComponent } from '../components/type-badge/type-badge.component';
import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  RouterModule,
  TypeBadgeComponent,
],
})
export class HomePage {
    constructor() {}

}
