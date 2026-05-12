import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  imports:[IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class PokemonCardComponent  implements OnInit {
  @Input() name: string = ""
  @Input() im: string = "Imagen"
  @Input() tipo: string = "Tipo"
  constructor() { }

  ngOnInit() {}

}
