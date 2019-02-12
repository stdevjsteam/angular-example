
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Injectable, OnDestroy} from '@angular/core';
import {CustomerServiceModule} from '../customer-service.module';

export class Customer {
    constructor(public id: number, public name: string) {
    }
}

const CUSTOMERS: Customer[] = [
    new Customer(11, 'Julian'),
    new Customer(12, 'Eric'),
    new Customer(13, 'Momi'),
    new Customer(14, 'Madeleine'),
    new Customer(15, 'Seth'),
    new Customer(16, 'Teresa')
];

const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves customers from a server */
@Injectable({
  providedIn: CustomerServiceModule
})
export class CustomersService implements OnDestroy {

    constructor() {
        console.log('CustomersService instance created.');
    }

    ngOnDestroy() {
        console.log('CustomersService instance destroyed.');
    }

    getCustomers(): Observable<Customer[]> {
        return of(CUSTOMERS).pipe(delay(FETCH_LATENCY));
    }

    getCustomer(id: number | string): Observable<Customer> {
        const customer$ = of(CUSTOMERS.find(customer => customer.id === +id));
        return customer$.pipe(delay(FETCH_LATENCY));
    }
}
