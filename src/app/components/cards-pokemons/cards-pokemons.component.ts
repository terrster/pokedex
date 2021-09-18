import { Component, Input, OnInit } from '@angular/core';
import { IPokemons } from 'src/app/interface/home/pokemon-data';
import { PokemonscolorsService } from 'src/app/services/colors/pokemonscolors.service';

@Component({
  selector: 'app-cards-pokemons',
  templateUrl: './cards-pokemons.component.html',
  styleUrls: ['./cards-pokemons.component.scss'],
})
export class CardsPokemonsComponent implements OnInit {

  @Input() pokemon: IPokemons;

  constructor(private colorpokemon: PokemonscolorsService) { }

  ngOnInit() {
    console.log(this.pokemon);
  }

  public getcolorpokemon(){
    return this.colorpokemon.getcolorpokemon(this.pokemon.types[0].type.name).color;
  }

}
