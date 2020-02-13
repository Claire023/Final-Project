import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Franchise } from 'src/app/models/franchise';
import { FranchiseService } from 'src/app/services/franchise.service';

@Component({
  selector: 'app-admin-franchise',
  templateUrl: './admin-franchise.component.html',
  styleUrls: ['./admin-franchise.component.css']
})
export class AdminFranchiseComponent implements OnInit {

  franchise:Franchise[] = [];

  constructor(private franchiseService:FranchiseService) { }


  ngOnInit() {
    this.getFranchiseList();
  }
  
  
  getFranchiseList() {
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour  savoir quand ton traitemenbt arrives
    this.franchiseService.getFranchiseMessages().subscribe(
      (franchise: Franchise[]) => this.franchise = franchise
      )
  }


   //https://www.devglan.com/angular/angular-6-example
 onDelete(franchise: Franchise,) {
  this.franchiseService.openDialog().afterClosed().subscribe(
      result => {
        //je supprime seulement si confirmer est cliqué
        if(result == false){
        this.franchiseService.deleteFranchise(franchise.ID).subscribe(
        data => {
          this.franchise = data;
      //je récupère les nouvelles data pour les afficher
    })
  }
}
  );
}

}
