import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PokemonResponse {	
  count: number;	
  results: any[];
  next: string;
  previous: string;
}

interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  title = 'Pokemons';
  resultList: PokemonResponse;
  url: string = "https://pokeapi.co/api/v2/pokemon";
  urlprevious : string ='';
  

  constructor(private httpClient: HttpClient) {
    this.resultList = { count: 0, results: [], next: '', previous: '' };

    this.httpClient.get<PokemonResponse>(this.url)
      .subscribe((response: PokemonResponse) => {
        this.resultList = response;
        this.loadPokemonImages();
      });
  }

  loadPokemonImages(){
    for (const pokemon of this.resultList.results) {
      this.httpClient.get<PokemonDetails>(pokemon.url)
        .subscribe((details: PokemonDetails) => {
          pokemon.image = details.sprites.front_default;
        });
    }
  }


  getNextPokemons(){
    this.url = this.resultList.next;
    this.httpClient.get<PokemonResponse>(this.url)
      .subscribe((response: PokemonResponse) => {
        this.resultList = response;
        this.loadPokemonImages();
      });

    if (!this.resultList.next) {
      alert('No more Pokémon to show');

    }

  }
  getPreviousPokemons(){
    this.url = this.resultList.previous;
    this.httpClient.get<PokemonResponse>(this.url)
      .subscribe((response: PokemonResponse) => {
        this.resultList = response;
        this.loadPokemonImages();
      });

    if (!this.resultList.previous) {
      alert('No more Pokémon to show');

    }
  }
}

