import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    @Input()
    public pattern: string | RegExp // use RegEx checks for the form

    public contact: Contact = new Contact();
    public contacts: Contact[];

    public constructor(private contactsService: ContactsService) { }
    
    public ngOnInit(): void {
        let observable = this.contactsService.getAllContacts();
        observable.subscribe(contacts => {
            this.contacts = contacts;
        });
    }

    public addContact(): void {
        let contactToAdd = new Contact();
        contactToAdd.phone = this.contact.phone;
        contactToAdd.email = this.contact.email;
        contactToAdd.message = this.contact.message;
        let observable = this.contactsService.addContact(contactToAdd);
        observable.subscribe(c => {
            alert(`
            Thank you.
            Your Message has been sent.
            We will answer you shortly.`);
            this.contacts.push(c);
        });
    }
}