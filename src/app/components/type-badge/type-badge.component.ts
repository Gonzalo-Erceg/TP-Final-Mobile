import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-badge',
  standalone: true,
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.scss'],
})

export class TypeBadgeComponent {

  @Input() type: string = '';

  TYPE_COLORS: Record<string, string> = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
  };

readonly TEXT_COLORS: Record<string, string> = {
  normal: '#000000',
  fire: '#000000',
  grass: '#000000',
  electric: '#000000',
  psychic: '#000000',
  ice: '#000000',
  flying: '#000000',
  ground: '#000000',
  rock: '#000000',
  bug: '#000000',
  steel: '#000000',
  fairy: '#000000',

  water: '#ffffff',
  fighting: '#ffffff',
  poison: '#ffffff',
  ghost: '#ffffff',
  dark: '#ffffff',
  dragon: '#ffffff',
};

  get backgroundColor(): string {
    return this.TYPE_COLORS[this.type?.toLowerCase()] || '#777';
  }

  get textColor(): string {
  return this.TEXT_COLORS[this.type.toLowerCase()] || '#ffffff';
}

}