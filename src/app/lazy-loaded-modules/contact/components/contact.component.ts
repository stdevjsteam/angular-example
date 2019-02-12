// Exact copy except import UserService from core
import {Component, OnDestroy, OnInit} from '@angular/core';

import {UserService} from '../../../core/user.service';
import {Contact, ContactService} from '../services/contact.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit, OnDestroy {
    contact: Contact;
    contacts: Array<Contact>;
    private contactsSubscription: Subscription;

    msg = 'Loading contacts ...';
    userName = '';

    constructor(private contactService: ContactService, userService: UserService) {
        this.userName = userService.userName;
    }

    ngOnInit(): void {
        this.contactsSubscription = this.contactService.getContacts().subscribe(contacts => {
            this.msg = '';
            this.contacts = contacts;
            this.contact = contacts[0];
        });
    }

    /** Dont forget to unsubscribe from subscriptions. */
    ngOnDestroy(): void {
        if (this.contactsSubscription) {
            this.contactsSubscription.unsubscribe();
        }
    }

    next() {
        let index = 1 + this.contacts.indexOf(this.contact);
        if (index >= this.contacts.length) {
            index = 0;
        }
        this.contact = this.contacts[index];
    }

    onSubmit() {
        this.displayMessage('Saved ' + this.contact.name);
    }

    /** Creates new contact. */
    newContact() {
        this.displayMessage('New contact');
        this.contact = {id: 42, name: ''};
        this.contacts.push(this.contact);
    }

    /** Display a message briefly, then remove it. */
    displayMessage(msg: string) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }
}
