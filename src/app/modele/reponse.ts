export class Reponse<T> {
    constructor (public statut : number,
                 public msg : string[],
                 public body : T){
        
    }
}