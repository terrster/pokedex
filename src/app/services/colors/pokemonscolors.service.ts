import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonscolorsService {

  private colorpokemons = [
    {
      type: 'grass',
      color: '#78C850',
    },
    {
      type: 'steel',
      color: '#A8A8C0',
    },
    {
      type: 'water',
      color: '#3899F8',
    },
    {
      type: 'bug',
      color: '#A8B820',
    },
    {
      type: 'dragon',
      color: '#7860E0',
    },
    {
      type: 'electric',
      color: '#F8D030',
    },
    {
      type: 'ghost',
      color: '#6060B0',
    },
    {
      type: 'fire',
      color: '#F05030',
    },
    {
      type: 'fairy',
      color: '#E79FE7',
    },
    {
      type: 'ice',
      color: '#58C8E0',
    },
    {
      type: 'fight',
      color: '#A05038',
    },
    {
      type: 'normal',
      color: '#A8A090',
    },
    {
      type: 'psychic',
      color: '#F870A0',
    },
    {
      type: 'rock',
      color: '#A8A090',
    },
    {
      type: 'dark',
      color: '#7A5848',
    },
    {
      type: 'ground',
      color: '#E9D6A4',
    },
    {
      type: 'poison',
      color: '#B058A0',
    },
    {
      type: 'fly',
      color: '#98A8F0',
    },
  ];

  constructor() { }

  public getcolorpokemon(type: string){
    return this.colorpokemons.find(colorpokemon => colorpokemon.type === type);
  }
}
