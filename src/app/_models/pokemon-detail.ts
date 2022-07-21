export class PokemonDetail {

    id:number;
    photo:String;
    name:String;
    type:String;
    weight: number;
    abilities: any[];
    description:String;
    evolutionDetail;

    constructor(id:number , photo:String,name:String, type:String, weigth:number, abilities:any[ ],description:String,evolutionDetail){
        this.id= id;
        this.name = name;
        this.type = type;
        this.photo = photo;
        this.weight = weigth;
        this.abilities = abilities;
        this.description = description;
        this.evolutionDetail = evolutionDetail;
        
    }
}