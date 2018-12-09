import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    constructor(private httpClient: HttpClient) {}

    public getAllContacts(): Observable<Contact[]> {
        return this.httpClient.get<Contact[]>("http://localhost:52088/api/messages");
    }

    public addContact(contact: Contact): Observable<Contact> {
        return this.httpClient.post<Contact>(
            "http://localhost:52088/api/messages", contact);
    }
}