import {Injectable, OnDestroy} from '@angular/core';

import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {ContactServiceModule} from '../contact-service.module';

export class Contact {
    constructor(public id: number, public name: string) {
    }
}

const CONTACTS: Contact[] = [
    new Contact(21, 'Jack'),
    new Contact(22, 'John'),
    new Contact(23, 'Karen')
];

const FETCH_LATENCY = 500;

/**
 * You can say to Angular dependency injector to provide service only in particular module to limit service scope.
 *
 * We create ContactServiceModule to avoid circular dependencies, and import this module to ContactModule.
 */
@Injectable({
    providedIn: ContactServiceModule
})
export class ContactService implements OnDestroy {

    constructor() {
        console.log('ContactService instance created.');
    }

    ngOnDestroy() {
        console.log('ContactService instance destroyed.');
    }

    getContacts(): Observable<Contact[]> {
        return of(CONTACTS).pipe(delay(FETCH_LATENCY));
    }

    getContact(id: number | string): Observable<Contact> {
        const contact$ = of(CONTACTS.find(contact => contact.id === +id));
        return contact$.pipe(delay(FETCH_LATENCY));
    }
}
