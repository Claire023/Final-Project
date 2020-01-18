import { Component, OnInit } from '@angular/core';
import {  ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  contacts:Contact[] = [];

  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.getContactList();
  }

getContactList() {
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour  savoir quand ton traitemenbt arrives
    this.contactService.getContacts().subscribe(
      (contacts: Contact[]) => this.contacts = contacts
      )
  }

}