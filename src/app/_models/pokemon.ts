export class Pokemon {

    id:number;
    photo:String;
    name:String;
    type:String;
    weight: number;
    abilities: any[];

    constructor(id:number , photo:String,name:String, type:String, weigth:number, abilities:any[ ]){
        this.id= id;
        this.name = name;
        this.type = type;
        this.photo = photo;
        this.weight = weigth;
        this.abilities = abilities;
    }
}