import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer, CustomersService} from '../services/customers.service';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customers-list.component.html'
})

export class CustomersListComponent {
    customers: Observable<Array<Customer>>;

    /** It's also possible to use async pipes with Observables, the angular will unsubscribe from it itself. */
    constructor(private customersService: CustomersService) {
        this.customers = this.customersService.getCustomers();
    }
}
