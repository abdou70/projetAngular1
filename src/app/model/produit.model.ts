export class Produit{
idProduit : number;
nomProduit : String;
prixProduit : number;
dateCreation : Date ;


constructor(idProduit:number,nomProduit:String,prixProduit:number,dateCreation:Date){

    this.idProduit=idProduit;
    this.nomProduit=nomProduit;
    this.prixProduit=prixProduit;
    this.dateCreation=dateCreation;


}

}