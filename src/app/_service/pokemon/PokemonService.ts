import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from 'app/_models/pokemon-list';
import { pokemon_request_url } from '../../constants/api_constants';
import { Pokemon } from '../../_models/pokemon';
import { ApiService } from '../../_service/api-service/api-service.service';


@Injectable()
export class PokemonService {
   


    idOrName: String;
    pokemons: PokemonList;
    currentPokemon: Pokemon;
    constructor(private apiService: ApiService, private http: HttpClient) { }


    public getAll(limit,offset) {
        return this.apiService.get(pokemon_request_url.list.replace(':LIMIT',limit).replace(':OFFSET',offset ));
    }
    getByName(idOrName) {
       return this.apiService.get(pokemon_request_url.detail.replace(':NAME',idOrName));
    }





}