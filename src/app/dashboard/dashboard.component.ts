import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'app/_models/pokemon';
import { PokemonList } from 'app/_models/pokemon-list';
import { PokemonService } from 'app/_service/pokemon/PokemonService';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  offset:number;
  limit:number;
  pokemonList:PokemonList;
  pokemons:Pokemon;
  page;
  

  constructor(private pokemonService:PokemonService) {
      this.offset = 0 ;
      this.limit = 12;
      this.page = 1;
      
     
   }

   loadPokemons(){
      this.pokemonService.getAll(this.limit,this.offset).subscribe(
        result=>{
          this.pokemonList = result;
          this.pokemons = result.results;
        },
        erorr=>{ console.log(erorr);}
      );
    
   }


   loadPage(event){
      this.offset = event*this.limit
      this.loadPokemons();
   }


  ngOnInit() {
     this.loadPokemons();
    
  }

  
  


}
