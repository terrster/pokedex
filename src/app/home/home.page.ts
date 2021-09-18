import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { mergeMap } from 'rxjs/operators';
import { IPokemons } from '../interface/home/pokemon-data';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pokemonList: IPokemons[] = [];

  constructor(private pokemonsService: PokemonService) {
    this.pokemonsService.getpokemons().subscribe({next:(pokemons: IPokemons)=>
    {this.pokemonList.push(pokemons);
    }});
  }
}


