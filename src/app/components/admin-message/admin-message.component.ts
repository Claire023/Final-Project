import { Component, OnInit } from '@angular/core';
import {  ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {

  contacts:Contact[] = [];

  constructor(private contactService:ContactService, private date: DatePipe) { }

  ngOnInit() {
    this.getContactList();
  }

getContactList() {
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour  savoir quand ton traitemenbt arrives
    this.contactService.getContacts().subscribe(
      (contacts: Contact[]) => this.contacts = contacts
      )
  }

//https://angular.io/api/common/DatePipe
formatDate(){
    this.date.transform(new Date(), 'dd/MM/yyyy , h:mm a');
  }


 //https://www.devglan.com/angular/angular-6-example
 onDelete(contacts: Contact) {
  this.contactService.openDialog().afterClosed().subscribe(
      result => {
        //je supprime seulement si confirmer est cliqué
        if(result == false){
        this.contactService.deleteContact(contacts.ID).subscribe(
        data => {
          this.contacts = data;
      //je récupère les nouvelles data pour les afficher
    })
  }
}
  );
}

}