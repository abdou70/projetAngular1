import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.css']
})
export class AddProduitsComponent implements OnInit {

  newproduit = new Produit(0,'',0,'');


  message : string='';


  constructor(private produitService :ProduitService) {
    
   }

  ngOnInit(): void {
  }

  addProduit(){
    this.produitService.ajouterProduit(this.newproduit);
    this.message = "produit " + this.newproduit.nomProduit + " ajouter avec success!";
  }
  
  

}
