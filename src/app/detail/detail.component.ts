import { Chain } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonDetail } from "app/_models/pokemon-detail";
import { PokemonService } from "app/_service/pokemon/PokemonService";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
  })
  export class DetailComponent implements OnInit {

     name:String = 'bulbasaur';
     pokemon:PokemonDetail;
     auxChain=[];
      
    constructor(private route: ActivatedRoute,private _pokemonService:PokemonService){

        this.route.paramMap.subscribe(params => { 
            this.name = params.get('name');
             this._pokemonService.getByName( this.name).subscribe(
             result=>{
               this.pokemon = result;
               console.log(result);
               convertChainToList(result.evolutionDetail.chain.evolvesTo);
             },
             erorr=>{ console.log(erorr);}
           );
            
         });
    }


    ngOnInit() {
 
       
   
      
     }
}

function convertChainToList(evolvesTo: any) {
   
    while( evolvesTo.length > 0){
        var chainLink = evolvesTo.shift();
        console.log(chainLink,this.auxChain);
        this.auxChain.push(chainLink?.species.name);
        evolvesTo = chainLink;

    }
}
