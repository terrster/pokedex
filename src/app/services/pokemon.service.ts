import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { Pokemonresponse } from '../interface/services/pokemonresponse';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getpokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=50';
    return this.http.get<Pokemonresponse>(url).pipe(
      map((response) => response.results),
      mergeMap((pokemonlist) =>
        from(pokemonlist).pipe(
          concatMap((pokemon)=> this.http.get(pokemon.url))
        )
      )
    );
  }
}
