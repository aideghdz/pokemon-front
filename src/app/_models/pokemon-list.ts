import { Pokemon } from "./pokemon";

export class PokemonList {

    count:number;
    previous:String;
    next:String;
    results: Pokemon[];

    constructor(count:number , previous:String, next:String, results){
        this.count = count;
        this.previous = previous;
        this.next= next;
        this.results = results;
    }
}